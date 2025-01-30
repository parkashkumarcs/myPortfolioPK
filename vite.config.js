import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  base: "/portfolio/", // IMPORTANT: Set this to your GitHub repository name
  css: {
    modules: {
      localsConvention: "camelCase",
    },
  },
});
