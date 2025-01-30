import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: "/portfolio/", // Set base to the GitHub repo name
  css: {
    modules: {
      localsConvention: "camelCase",
    },
  },
});
