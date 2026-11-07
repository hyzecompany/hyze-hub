// @ts-check
import tailwindcss from "@tailwindcss/vite";
import { defineConfig } from "astro/config";

// Catálogo visual do design system (pnpm dev): as páginas ficam em demo/pages.
export default defineConfig({
  srcDir: "./demo",
  output: "static",
  server: { port: 4320 },
  vite: { plugins: [tailwindcss()] },
});
