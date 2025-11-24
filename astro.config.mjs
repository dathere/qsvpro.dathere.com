import { defineConfig } from "astro/config";
import react from "@astrojs/react";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  site: "https://qsvpro.dathere.com",
  integrations: [react(), tailwindcss()],

  vite: {
    plugins: [tailwindcss()],
  },
});