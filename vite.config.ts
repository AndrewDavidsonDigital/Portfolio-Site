/// <reference types="vitest" />

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import path from "path";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  base: './',
  publicDir: "public",
  resolve: {
    alias: {
      "@components": path.resolve(__dirname, "./src/components"),
      "@content": path.resolve(__dirname, "./src/content"),
      "@views": path.resolve(__dirname, "./src/views"),
      "@assets": path.resolve(__dirname, "./src/assets"),
      "@lib": path.resolve(__dirname, "./src/lib"),
      "@router": path.resolve(__dirname, "./src/router"),
    },
  },
  build: {
    chunkSizeWarningLimit: 1000,
    rollupOptions: {
      output: {
        manualChunks
      }
    }
  }
})


function manualChunks(id: string) {
	if (id.includes('node_modules') && id.includes('/three/')) {
		return 'three';
	}
	if (id.includes('node_modules')) {
		return 'vendor';
	}

	return null;
}