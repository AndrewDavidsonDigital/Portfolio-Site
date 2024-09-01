/// <reference types="vitest" />

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vercel from 'vite-plugin-vercel';
import path from "path";

// https://vitejs.dev/config/
export default defineConfig({
  base: './',
  publicDir: "public",
  resolve: {
    alias: {
      "@components": path.resolve(__dirname, "./src/components"),
      "@content": path.resolve(__dirname, "./src/content"),
      "@views": path.resolve(__dirname, "./src/views"),
      "@assets": path.resolve(__dirname, "./src/assets"),
      // "@stores": path.resolve(__dirname, "./src/stores"),    
      // "@lib": path.resolve(__dirname, "./src/lib"),     
      // "&audio": path.resolve(__dirname, "./src/stores/audio"),      
    },
  },
  plugins: [
    vue(),
    vercel(),
  ],
})
