import 'vite-ssg';
import { fileURLToPath, URL } from 'node:url';
import { defineConfig, UserConfigFn } from 'vite';
import generateSitemap from 'vite-ssg-sitemap';
import vue from '@vitejs/plugin-vue';

const base = '/';
const path = 'dist';
const outDir = path + base;
const host = 'localhost';
const port = 4173;
const hostname = `http://${host}:${port}${base}`;

export const config: UserConfigFn = (env) => ({
  base,
  build: {
    assetsInlineLimit: 0,
    outDir,
  },
  esbuild: {
    drop: env.mode === 'production' ? ['console', 'debugger'] : undefined,
  },
  plugins: [vue()],
  preview: {
    host,
    port,
    strictPort: true,
  },
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
    },
  },
  ssgOptions: {
    crittersOptions: {
      path,
      preload: 'media',
    },
    formatting: 'minify',
    script: 'defer',
    onFinished() {
      generateSitemap({
        basePath: base.substring(0, base.length - 1),
        hostname,
        outDir,
      });
    },
  },
  test: {
    include: ['test/**/*.test.ts'],
    environment: 'jsdom',
  },
});

export default defineConfig(config);
