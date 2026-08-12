import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      '/leadscrm': {
        target: 'https://clientzone.newfarhanmarble.com',
        changeOrigin: true,
      },
    },
  },
});
