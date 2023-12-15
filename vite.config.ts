import 'vite-ssg';
import { fileURLToPath, URL } from 'node:url';
import { defineConfig, UserConfigFn } from 'vite';
import vue from '@vitejs/plugin-vue';

export const previewPort = 4173;

const path = 'dist';
export const config: UserConfigFn = (env) => ({
  base: '/',
  build: {
    assetsInlineLimit: 0,
    outDir: path,
  },
  preview: {
    port: previewPort,
  },
  esbuild: {
    drop: env.mode === 'production' ? ['console', 'debugger'] : undefined,
  },
  plugins: [vue()],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
    },
  },
  ssgOptions: {
    crittersOptions: {
      path,
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
