import vue from "@vitejs/plugin-vue";
import vueJsx from "@vitejs/plugin-vue-jsx";
import autoprefixer from "autoprefixer";
import path from "path";
import tailwind from "tailwindcss";
import { defineConfig } from "vite";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue(), vueJsx()],
  css: {
    postcss: {
      plugins: [tailwind(), autoprefixer()]
    }
  },
  server: { port: 3000, host: true },
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src")
    }
  }
});
