// @ts-check
import tailwindcss from "@tailwindcss/vite";
import { defineConfig } from "astro/config";

// Site 100% estático: servido como static assets de um Worker (requisições de assets são gratuitas).
export default defineConfig({
  site: "https://hyzecompany.com.br",
  output: "static",
  trailingSlash: "never",
  build: { format: "file" },
  vite: { plugins: [tailwindcss()] },
});
