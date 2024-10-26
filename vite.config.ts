import { defineConfig } from 'vite';
import path from 'path';
import react from '@vitejs/plugin-react';
import { TanStackRouterVite } from '@tanstack/router-plugin/vite';
import basicSsl from '@vitejs/plugin-basic-ssl';

// https://vitejs.dev/config/
export default defineConfig({
   plugins: [
      TanStackRouterVite({}),
      react(),
      // basicSsl()
   ],
   resolve: {
      alias: {
         '@': path.resolve(__dirname, './src'),
      },
   },
   // for deployment
   build: {
      outDir: './docs',
   },
   base: './',
});
