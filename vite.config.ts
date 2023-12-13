import { fileURLToPath, URL } from 'node:url';
import { defineConfig, UserConfigFn } from 'vite';
import vue from '@vitejs/plugin-vue';
import vueJsx from '@vitejs/plugin-vue-jsx';

export const config: UserConfigFn = (env) => ({
  base: '/',
  build: {
    assetsInlineLimit: 0,
    outDir: 'dist',
  },
  esbuild: {
    drop: env.mode === 'production' ? ['console', 'debugger'] : undefined,
  },
  plugins: [vue(), vueJsx()],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
    },
  },
});

export default defineConfig(config);
