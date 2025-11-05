import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import { tanstackRouter } from '@tanstack/router-plugin/vite'

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    proxy: {
      "/api": {
        target: "https://cat-pizza.vercel.app/",
        changeOrigin: true,
      },
      "/public": {
        target: "https://cat-pizza.vercel.app/",
        changeOrigin: true,
      },
    },
  },
  plugins: [tanstackRouter(),react(),tailwindcss()],
});
