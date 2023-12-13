import { defineConfig } from 'vite';
import { name } from './package.json';
import { config } from './vite.config';

export default defineConfig((env) => ({
  ...config(env),
  base: `/${name}/`,
  build: {
    assetsInlineLimit: 0,
    outDir: 'dist-gh-pages',
  },
}));
