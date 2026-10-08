import { defineConfig } from "astro/config";
import vercel from "@astrojs/vercel";
import sitemap from "@astrojs/sitemap";

export default defineConfig({
  site: "https://colosalle.fr",
  adapter: vercel(),
  integrations: [sitemap()],
  image: {
    domains: ["firebasestorage.googleapis.com", "storage.googleapis.com"],
    remotePatterns: [{ protocol: "https" }],
  },
});
