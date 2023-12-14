import { configDefaults, defineConfig, mergeConfig } from 'vitest/config';
import { config } from './vite.config';

export default defineConfig((env) =>
  mergeConfig(
    config(env),
    defineConfig({
      test: {
        include: ['test/**/*.test.ts'],
        environment: 'jsdom',
        exclude: [...configDefaults.exclude, 'e2e/*'],
      },
    }),
  ),
);
