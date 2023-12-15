import 'vite-ssg';
import { defineConfig, mergeConfig } from 'vite';
import generateSitemap from 'vite-ssg-sitemap';
import { author, name } from './package.json';
import { config } from './vite.config';

const base = `/${name}/`;
const path = 'dist-gh-pages';
const outDir = path + base;
const hostname = `https://${author.name.toLowerCase()}.github.io${base}`;

export default defineConfig((env) =>
  mergeConfig(
    config(env),
    defineConfig({
      base,
      build: {
        outDir,
      },
      ssgOptions: {
        crittersOptions: {
          path,
        },
        onFinished() {
          generateSitemap({
            basePath: base.substring(0, base.length - 1),
            hostname,
            outDir,
          });
        },
      },
    }),
  ),
);
