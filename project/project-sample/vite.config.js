import { fileURLToPath, URL } from 'node:url';
import { defineConfig, splitVendorChunkPlugin } from 'vite';
import vue from '@vitejs/plugin-vue';

export default defineConfig({
  plugins: [vue(), splitVendorChunkPlugin()],

  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
    },
  },

  server: {
    proxy: {
      '/api': {
        target: 'https://course-vue.javascript.ru',
        // Для локально развёрнутого сервера
        // target: 'http://localhost:3000',
        changeOrigin: true,
      },
    },
  },
});
