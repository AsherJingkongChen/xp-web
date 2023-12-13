import { fileURLToPath, URL } from 'node:url';
import { defineConfig, configDefaults } from 'vitest/config';
import { config } from './vite.config';

export default defineConfig((env) => ({
  ...config(env),
  test: {
    environment: 'jsdom',
    exclude: [...configDefaults.exclude, 'e2e/*'],
    root: fileURLToPath(new URL('./', import.meta.url)),
  },
}));
