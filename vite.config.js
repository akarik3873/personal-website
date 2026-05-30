import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// Served from the apex of abrahamkarikkineth.com, so base is "/".
export default defineConfig({
  plugins: [react()],
  base: "/",
});
