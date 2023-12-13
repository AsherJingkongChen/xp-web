import { defineConfig, mergeConfig } from 'vite';
import type { ViteSSGOptions } from 'vite-ssg';
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
      ssgOptions: <ViteSSGOptions>{
        crittersOptions: {
          path,
        },
      },
    }),
  ),
);
