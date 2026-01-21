import { defineConfig } from 'vite';

export default defineConfig({
  server: {
    proxy: {
      '/api-games': {
        target: 'https://www.freetogame.com',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api-games/, '/api'),
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        }
      },
    },
  },
});