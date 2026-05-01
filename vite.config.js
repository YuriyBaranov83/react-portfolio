import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
// import path from 'path'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    rollupOptions: {
      output: {
        manualChunks: {
          "vendor-react": ["react", "react-dom"],
          "vendor-motion": ["framer-motion"],
          "vendor-swiper": ["swiper"],
          "vendor-i18n": ["i18next", "react-i18next"],
        },
      },
    },
  },
  resolve: {
    alias: {
      "@": "/src",
      "@images": "/src/assets/images",
      "@components": "/src/components",
      "@assets": "/src/assets",
    },
  },
});
