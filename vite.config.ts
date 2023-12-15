import 'vite-ssg';
import { fileURLToPath, URL } from 'node:url';
import { defineConfig, UserConfigFn } from 'vite';
import vue from '@vitejs/plugin-vue';

const path = 'dist';

export const config: UserConfigFn = (env) => ({
  base: '/',
  build: {
    assetsInlineLimit: 0,
    outDir: path,
  },
  esbuild: {
    drop: env.mode === 'production' ? ['console', 'debugger'] : undefined,
  },
  plugins: [vue()],
  preview: {
    host: 'localhost',
    port: 4173,
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
  },
  test: {
    include: ['test/**/*.test.ts'],
    environment: 'jsdom',
  },
});

export default defineConfig(config);
