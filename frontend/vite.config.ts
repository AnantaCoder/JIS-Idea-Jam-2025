import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import vitePluginSvgr from "vite-plugin-svgr";
// https://vite.dev/config/
export default defineConfig({
  plugins: [vitePluginSvgr(), react(), tailwindcss()],
  server: {
    proxy: {
      '/api': {
        target: 'http://localhost:8000',
        changeOrigin: true,
        secure: false,
        // rewrite: (path) => path.replace(/^\/api/, '') // Only use if your Django endpoints don't have /api prefix
      }
    }
  }
});