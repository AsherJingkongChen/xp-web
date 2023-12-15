import 'vite-ssg';
import { fileURLToPath, URL } from 'node:url';
import { defineConfig, PreviewOptions, UserConfigFn } from 'vite';
import vue from '@vitejs/plugin-vue';

const path = 'dist';

export const preview = {
  host: 'localhost',
  port: 4173,
  strictPort: true,
} as const satisfies PreviewOptions;

export const config: UserConfigFn = (env) => ({
  base: '/',
  build: {
    assetsInlineLimit: 0,
    outDir: path,
  },
  preview,
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
