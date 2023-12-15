import 'vite-ssg';
import { defineConfig, mergeConfig } from 'vite';
import { author, name } from './package.json';
import { customConfigFn } from './vite.config';

export default defineConfig((env) =>
  customConfigFn({
    dist: 'dist-gh-pages',
    env,
    origin: `https://${author.name}.github.io`.toLowerCase(),
    root: `/${name}`,
  }),
);
