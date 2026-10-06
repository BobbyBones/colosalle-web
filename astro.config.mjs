import { defineConfig } from "astro/config";
import vercel from "@astrojs/vercel";

export default defineConfig({
  site: "https://colosalle.fr",
  adapter: vercel(),
  image: {
    domains: ["firebasestorage.googleapis.com", "storage.googleapis.com"],
    remotePatterns: [{ protocol: "https" }],
  },
});
