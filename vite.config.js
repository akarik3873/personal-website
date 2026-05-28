import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// `base` is set for GitHub Pages project sites served from /personal-website/.
export default defineConfig({
  plugins: [react()],
  base: "/personal-website/",
});
