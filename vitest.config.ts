import { fileURLToPath, URL } from 'node:url';
import { configDefaults, defineConfig, mergeConfig } from 'vitest/config';
import { config } from './vite.config';

export default defineConfig((env) =>
  mergeConfig(
    config(env),
    defineConfig({
      test: {
        environment: 'jsdom',
        exclude: [...configDefaults.exclude, 'e2e/*'],
        root: fileURLToPath(new URL('./', import.meta.url)),
      },
    }),
  ),
);
