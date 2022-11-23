/// <reference types="vitest" />

import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@pages': path.resolve(__dirname, './src/pages'),
      '@utils': path.resolve(__dirname, './src/utils'),
      '@components': path.resolve(__dirname, './src/components'),
    },
  },
  build: {
    outDir: './dist',
  },
  test: {
    globals: true,
    environment: 'jsdom',
    setupFiles: ['./vitest-setup.ts'],
    include: ['./src/**/?(*.)+(spec|test|tests).[tj]s?(x)'],
    exclude: ['node_modules/', '.out/', 'public/'],
    coverage: {
      include: ['src/components/**/*'],
      exclude: [
        'src/utils',
        'src/**/?(*.)+(spec|test|tests).[tj]s?(x)',
        'src/**/styles.ts',
      ],
      statements: 80,
      branches: 50,
      functions: 80,
      lines: 100,
    },
  },
});
