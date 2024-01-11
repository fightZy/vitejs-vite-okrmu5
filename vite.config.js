import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import dts from 'vite-plugin-dts';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), dts({ rollupTypes: true })],
  build: {
    minify: false,
    lib: {
      entry: {
        index: './src/index.ts',
      },
    },
    rollupOptions: {
      output: [
        { format: 'es', sourcemap: true, dir: './dist' },
        { format: 'cjs', sourcemap: true, dir: './dist' },
      ],
    },
  },
});
