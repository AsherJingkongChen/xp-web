import 'vite-ssg';
import { defineConfig, mergeConfig } from 'vite';
import { name } from './package.json';
import { config } from './vite.config';

const path = 'dist-gh-pages';

export default defineConfig((env) =>
  mergeConfig(
    config(env),
    defineConfig({
      base: `/${name}/`,
      build: {
        outDir: `${path}/${name}`,
      },
      ssgOptions: {
        crittersOptions: {
          path,
        },
      },
    }),
  ),
);
