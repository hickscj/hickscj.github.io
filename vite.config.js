import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import viteTsconfigPaths from 'vite-tsconfig-paths';
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  build: {
    outDir: 'docs'
  },
  plugins: [
    react(),
    viteTsconfigPaths(),
    tailwindcss()
  ],
  server: {
    open: true,
    port: 5173,
  },
});
