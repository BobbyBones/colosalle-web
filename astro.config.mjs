import { defineConfig } from "astro/config";
import vercel from "@astrojs/vercel";
import sitemap from "@astrojs/sitemap";

// Pages de l'application Flutter (voir src/lib/AppFlutter.astro) : rien a
// indexer, elles sont dessinees dans un canevas. On les garde hors du sitemap.
const PAGES_APP = [
  "/explorer", "/connexion", "/chargement", "/bienvenue", "/favoris",
  "/resas", "/profil", "/aujourdhui", "/calendrier", "/annonces",
];

export default defineConfig({
  site: "https://colosalle.fr",
  adapter: vercel(),
  integrations: [
    sitemap({
      filter: (page) =>
        !PAGES_APP.includes(new URL(page).pathname.replace(/\/$/, "")),
    }),
  ],
  image: {
    domains: ["firebasestorage.googleapis.com", "storage.googleapis.com"],
    remotePatterns: [{ protocol: "https" }],
  },
});