import { defineConfig, mergeConfig } from 'vite';
import defaultConfig from './vite.config';
import { name } from './package.json';

export default mergeConfig(
  defaultConfig,
  defineConfig({
    base: `/${name}/`,
    build: {
      outDir: 'dist-gh-pages',
    },
  }),
);
