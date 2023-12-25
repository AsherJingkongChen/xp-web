import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vite';

export default defineConfig(({ mode }) => {
  return {
    build: {
      assetsInlineLimit: 0,
    },
    envDir: 'env',
    esbuild: {
      drop:
        mode === 'production'
          ? ['console', 'debugger']
          : undefined,
    },
    plugins: [sveltekit()],
    preview: {
      port: 4173,
      strictPort: true,
    },
  };
});
