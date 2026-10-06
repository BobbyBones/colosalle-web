import { getApps, initializeApp, cert } from "firebase-admin/app";
import { getFirestore, FieldValue } from "firebase-admin/firestore";

export const prerender = false;

const FROM = "Colosalle <noreply@colosalle.fr>";
const DEST = "support@colosalle.fr";

function reponse(obj, statut = 200) {
  return new Response(JSON.stringify(obj), {
    status: statut,
    headers: { "Content-Type": "application/json; charset=utf-8" },
  });
}

function initFirebase() {
  if (getApps().length) return;
  const raw = process.env.FIREBASE_SERVICE_ACCOUNT;
  if (!raw) throw new Error("FIREBASE_SERVICE_ACCOUNT absent");
  initializeApp({ credential: cert(JSON.parse(raw)) });
}

function net(v, max) {
  return String(v ?? "").replace(/\s+/g, " ").trim().slice(0, max);
}

function echappe(s) {
  return String(s)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;");
}

export async function POST({ request }) {
  let brut;
  try {
    brut = await request.json();
  } catch {
    return reponse({ ok: false, erreur: "Requête illisible." }, 400);
  }

  // Champ piège : invisible, rempli uniquement par les robots.
  if (net(brut.site, 50)) return reponse({ ok: true });

  const lead = {
    nom: net(brut.nom, 120),
    email: net(brut.email, 160).toLowerCase(),
    telephone: net(brut.telephone, 30),
    lieu: net(brut.lieu, 160),
    ville: net(brut.ville, 120),
    typeLieu: net(brut.typeLieu, 60),
    message: net(brut.message, 2000),
  };

  if (!lead.nom || !lead.lieu || !lead.ville) {
    return reponse({ ok: false, erreur: "Nom, lieu et ville sont obligatoires." }, 400);
  }
  if (!lead.email && !lead.telephone) {
    return reponse({ ok: false, erreur: "Laissez un email ou un téléphone pour qu'on puisse vous répondre." }, 400);
  }
  if (lead.email && !/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(lead.email)) {
    return reponse({ ok: false, erreur: "Cet email ne semble pas valide." }, 400);
  }

  let enregistre = false;
  try {
    initFirebase();
    await getFirestore().collection("hostLeads").add({
      ...lead,
      statut: "nouveau",
      source: "site/devenir-hote",
      creeLe: FieldValue.serverTimestamp(),
    });
    enregistre = true;
  } catch (e) {
    console.error("hostLeads : ecriture impossible", e);
  }

  let envoye = false;
  try {
    const cle = process.env.RESEND_API_KEY;
    if (cle) {
      const lignes = [
        ["Nom", lead.nom],
        ["Lieu", lead.lieu],
        ["Ville", lead.ville],
        ["Type", lead.typeLieu],
        ["Email", lead.email],
        ["Téléphone", lead.telephone],
        ["Message", lead.message],
      ]
        .filter(([, v]) => v)
        .map(([k, v]) => "<p style=\"margin:0 0 8px\"><strong>" + k + "</strong> : " + echappe(v) + "</p>")
        .join("");

      const r = await fetch("https://api.resend.com/emails", {
        method: "POST",
        headers: {
          Authorization: "Bearer " + cle,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          from: FROM,
          to: [DEST],
          reply_to: lead.email || undefined,
          subject: "Nouveau lieu proposé : " + lead.lieu + " (" + lead.ville + ")",
          html:
            "<div style=\"font-family:system-ui,sans-serif;font-size:15px;line-height:1.6\">" +
            "<h2 style=\"margin:0 0 16px\">Nouvelle proposition de lieu</h2>" +
            lignes +
            "</div>",
        }),
      });
      envoye = r.ok;
      if (!r.ok) console.error("Resend", r.status, await r.text());
    }
  } catch (e) {
    console.error("Resend : envoi impossible", e);
  }

  if (!enregistre && !envoye) {
    return reponse(
      { ok: false, erreur: "Envoi impossible pour le moment. Écrivez-nous à support@colosalle.fr." },
      500
    );
  }

  return reponse({ ok: true });
}
