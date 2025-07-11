import { defineConfig } from 'vitest/config';
import { resolve } from 'path';

export default defineConfig({
  test: {
    globals: true,
    environment: 'jsdom',
    setupFiles: ['./tests/setup.ts'],
  },
  resolve: {
    alias: {
      '@enums': resolve(__dirname, './src/enums'),
      '@utils': resolve(__dirname, './src/utils'),
      '@src': resolve(__dirname, './src'),
    },
  },
});