import { getApps, initializeApp, cert } from "firebase-admin/app";
import { getFirestore, FieldValue } from "firebase-admin/firestore";

export const prerender = false;

/*
 * Mesure d'audience ANONYME de Colosalle (site et applications).
 *
 * Un compteur par jour (heure de Paris) et par evenement, dans
 * Firestore : statistiques/{AAAA-MM-JJ}. Ni cookie, ni adresse IP, ni
 * identifiant d'utilisateur ou d'appareil : rien ne permet de suivre une
 * personne, ce qui exempte cette mesure de consentement (CNIL) tant
 * qu'elle reste agregee.
 *
 * Corps attendu (JSON, aussi en text/plain pour navigator.sendBeacon) :
 *   { e: "vue_lieu", s: "site" | "ios" | "android", l: "<venueId>" }
 */

const EVENEMENTS = new Set([
  "vue_lieu",
  "clic_reserver",
  "clic_proposer_lieu",
  "vue_devenir_hote",
]);
// Evenements comptes aussi par annonce.
const PAR_LIEU = new Set(["vue_lieu", "clic_reserver"]);
const SURFACES = new Set(["site", "ios", "android"]);
const ROBOT = /bot|crawl|spider|slurp|preview|headless|lighthouse/i;

function initFirebase() {
  if (getApps().length) return;
  const raw = process.env.FIREBASE_SERVICE_ACCOUNT;
  if (!raw) throw new Error("FIREBASE_SERVICE_ACCOUNT absent");
  initializeApp({ credential: cert(JSON.parse(raw)) });
}

/** Jour en cours a Paris, AAAA-MM-JJ. */
function jourParis() {
  return new Intl.DateTimeFormat("fr-CA", {
    timeZone: "Europe/Paris",
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
  }).format(new Date());
}

// Toujours 204 : un compteur ne doit jamais faire echouer une page.
const vide = () => new Response(null, { status: 204 });

export async function POST({ request }) {
  try {
    if (ROBOT.test(request.headers.get("user-agent") || "")) return vide();

    const brut = JSON.parse((await request.text()).slice(0, 500));
    const e = String(brut.e || "");
    const s = String(brut.s || "");
    const l = String(brut.l || "");
    if (!EVENEMENTS.has(e) || !SURFACES.has(s)) return vide();

    const donnees = {
      [e]: FieldValue.increment(1),
      [`${e}_${s}`]: FieldValue.increment(1),
      majLe: FieldValue.serverTimestamp(),
    };
    if (PAR_LIEU.has(e) && /^[A-Za-z0-9]{10,40}$/.test(l)) {
      donnees.lieux = { [l]: { [e]: FieldValue.increment(1) } };
    }

    initFirebase();
    await getFirestore()
      .collection("statistiques")
      .doc(jourParis())
      .set(donnees, { merge: true });
  } catch (err) {
    console.error("statistiques", err);
  }
  return vide();
}
