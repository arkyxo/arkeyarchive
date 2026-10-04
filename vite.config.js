import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  base: "./", // relative paths, so the build works at a domain root or in a subfolder (e.g. GitHub Pages)
  build: {
    rollupOptions: {
      output: {
        manualChunks: { react: ["react", "react-dom"] }, // cached separately from your own code
      },
    },
  },
});
