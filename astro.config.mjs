import { defineConfig } from "astro/config";

export default defineConfig({
  site: "https://colosalle.fr",
  image: {
    domains: ["firebasestorage.googleapis.com", "storage.googleapis.com"],
    remotePatterns: [{ protocol: "https" }],
  },
});
