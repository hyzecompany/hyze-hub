// @ts-check
import tailwindcss from "@tailwindcss/vite";
import { defineConfig } from "astro/config";

// Site 100% estático: servido como static assets de um Worker (requisições de assets são gratuitas).
export default defineConfig({
  site: "https://sites.hyzecompany.com.br",
  output: "static",
  server: { port: 4322 },
  trailingSlash: "never",
  build: { format: "file" },
  vite: { plugins: [tailwindcss()] },
});
