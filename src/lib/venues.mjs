import { initializeApp, cert, getApps } from "firebase-admin/app";
import { getFirestore } from "firebase-admin/firestore";
import { readFileSync } from "fs";

function initFirebase() {
  if (getApps().length) return;
  const raw = process.env.FIREBASE_SERVICE_ACCOUNT
    ? process.env.FIREBASE_SERVICE_ACCOUNT
    : readFileSync("./service-account.json", "utf8");
  initializeApp({ credential: cert(JSON.parse(raw)) });
}

export function slugify(text) {
  return String(text)
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "")
    .slice(0, 60);
}

function arrondissement(postalCode, city) {
  const cp = String(postalCode || "");
  const c = String(city || "").toLowerCase();
  if (cp.length !== 5) return null;
  if (cp.startsWith("75")) {
    const n = parseInt(cp.slice(2), 10);
    if (n >= 1 && n <= 20) return n;
  }
  if (cp.startsWith("69") && c.includes("lyon")) {
    const n = parseInt(cp.slice(3), 10);
    if (n >= 1 && n <= 9) return n;
  }
  if (cp.startsWith("13") && c.includes("marseille")) {
    const n = parseInt(cp.slice(3), 10);
    if (n >= 1 && n <= 16) return n;
  }
  return null;
}

function titleCase(text) {
  return String(text || "")
    .split(/(\s|-)/)
    .map((w) => (w.length > 1 ? w[0].toUpperCase() + w.slice(1).toLowerCase() : w))
    .join("");
}

const TYPE_LABELS = {
  theatre: "Théâtre",
  studio: "Studio",
  salle: "Salle de répétition",
  autre: "Autre lieu",
};

const EQUIPMENT_LABELS = {
  son: "Système son",
  lumiere: "Lumières scéniques",
  piano: "Piano",
  regie: "Régie technique",
  regisseur: "Régisseur disponible",
  loges: "Loges",
  climatisation: "Climatisation",
  wifi: "Wifi",
  parking: "Parking",
  scene_eq: "Scène équipée",
  miroirs: "Miroirs de danse",
  rideaux: "Rideaux scéniques",
  gradins: "Gradins / sièges",
  video: "Vidéoprojecteur",
  cuisine: "Cuisine / traiteur",
};

const JOURS = ["lundi", "mardi", "mercredi", "jeudi", "vendredi", "samedi", "dimanche"];

function formatHeure(h) {
  return `${String(h).padStart(2, "0")} h`;
}

function joursOuverts(closedWeekdays) {
  const fermes = new Set((closedWeekdays || []).map(Number));
  return JOURS.map((nom, i) => ({ nom, ouvert: !fermes.has(i + 1) }));
}

/** Décale légèrement le point pour ne pas exposer l'adresse exacte. */
function flouterPosition(lat, lng, seed) {
  if (lat == null || lng == null) return null;
  let h = 0;
  for (let i = 0; i < seed.length; i++) h = (h * 31 + seed.charCodeAt(i)) >>> 0;
  const dLat = (((h % 1000) / 1000) - 0.5) * 0.0045;
  const dLng = ((((h >> 10) % 1000) / 1000) - 0.5) * 0.0065;
  return { lat: +(lat + dLat).toFixed(5), lng: +(lng + dLng).toFixed(5) };
}

function formatDateFr(d) {
  if (!d) return "";
  return d.toLocaleDateString("fr-FR", { month: "long", year: "numeric" });
}

export async function getPublishedVenues() {
  initFirebase();
  const db = getFirestore();

  const snap = await db.collection("venues").where("isPublished", "==", true).get();

  const avisSnap = await db.collection("reviews").get();
  const avisParLieu = new Map();
  avisSnap.forEach((doc) => {
    const r = doc.data();
    if (r.role && r.role !== "artistReview") return;
    if (!r.venueId) return;
    if (!r.comment || !String(r.comment).trim()) return;
    const liste = avisParLieu.get(r.venueId) || [];
    liste.push({
      id: doc.id,
      auteur: String(r.reviewerName || "Artiste").trim(),
      note: Number(r.rating) || 0,
      commentaire: String(r.comment).trim(),
      date: formatDateFr(r.createdAt?.toDate?.()),
      horodatage: r.createdAt?.toMillis?.() || 0,
    });
    avisParLieu.set(r.venueId, liste);
  });

  return snap.docs
    .map((doc) => {
      const v = doc.data();
      if (v.isDraft === true) return null;
      if (!v.title || !String(v.title).trim()) return null;

      const city = titleCase(v.city);
      const arr = arrondissement(v.postalCode, v.city);
      const displayLocation = arr
        ? `${city} ${arr}${arr === 1 ? "er" : "e"}`
        : city;

      const avis = (avisParLieu.get(doc.id) || []).sort(
        (a, b) => b.horodatage - a.horodatage
      );

      const ouverture = Number(v.openingHour ?? 8);
      const fermeture = Number(v.closingHour ?? 23);

      return {
        id: doc.id,
        slug: `${slugify(v.title)}-${doc.id.slice(0, 6).toLowerCase()}`,
        title: String(v.title).trim(),
        description: String(v.description || "").trim(),
        type: v.type || "autre",
        typeLabel: TYPE_LABELS[v.type] || TYPE_LABELS.autre,
        city,
        postalCode: String(v.postalCode || ""),
        arrondissement: arr,
        displayLocation,
        citySlug: slugify(city),
        arrSlug: arr ? `${slugify(city)}-${arr}` : slugify(city),
        position: flouterPosition(v.latitude, v.longitude, doc.id),
        photos: Array.isArray(v.photos) ? v.photos : [],
        capacity: Number(v.capacity) || 0,
        surface: Math.round(Number(v.surface) || 0),
        equipments: (Array.isArray(v.equipments) ? v.equipments : []).map((e) => ({
          id: e,
          label: EQUIPMENT_LABELS[e] || e,
        })),
        pricePerHour: Number(v.pricePerHour) || 0,
        pricePerDay: v.pricePerDay ? Number(v.pricePerDay) : null,
        caution: Math.round(Number(v.cautionAmount) || 0),
        horaires: {
          ouverture: formatHeure(ouverture),
          fermeture: formatHeure(fermeture),
          amplitude: `${formatHeure(ouverture)} à ${formatHeure(fermeture)}`,
          jours: joursOuverts(v.closedWeekdays),
          tousLesJours: !(v.closedWeekdays || []).length,
        },
        rating: Number(v.rating) || 0,
        reviewCount: Number(v.reviewCount) || 0,
        avis,
        hostFirstName: String(v.ownerName || "").trim().split(" ")[0] || "",
      };
    })
    .filter(Boolean);
}
