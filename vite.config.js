import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tailwindcss from '@tailwindcss/vite';

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
  ],
  // configuração do server
  server: {
    open: true,
    port: 5173,
    proxy: {
      '/api': 'http://localhost:3000'
    }
  }
});