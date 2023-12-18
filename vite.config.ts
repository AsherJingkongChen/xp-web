import 'vite-ssg';
import { join, resolve } from 'node:path';
import { ConfigEnv, defineConfig, UserConfig } from 'vite';
import { VitePWA } from 'vite-plugin-pwa';
import generateSitemap from 'vite-ssg-sitemap';
import vue from '@vitejs/plugin-vue';

const host = 'localhost';
const port = 4173;

export default defineConfig((env) =>
  customConfigFn({
    dist: 'dist',
    env,
    origin: `http://${host}:${port}`,
    root: '/',
  }),
);

export const customConfigFn = ({
  dist,
  env,
  origin,
  root,
}: {
  dist: string;
  env: ConfigEnv;
  origin: string;
  root: string;
}): UserConfig => {
  const outDir = join(dist, root);
  return {
    base: join(root, '/'),
    build: {
      assetsInlineLimit: 0,
      outDir,
    },
    envDir: join('env', dist),
    esbuild: {
      drop: env.mode === 'production' ? ['debugger'] : undefined,
    },
    plugins: [
      vue(),
      VitePWA({
        manifest: {
          name: 'XP App',
          short_name: 'XP',
          description: 'Any file previewer',
          background_color: '#503030',
          theme_color: '#503030',
          orientation: 'portrait',
          display: 'standalone',
          display_override: ['fullscreen'],
          icons: [
            {
              src: 'assets/pwa-192x192.png',
              sizes: '192x192',
              type: 'image/png',
              purpose: 'any',
            },
            {
              src: 'assets/pwa-512x512.png',
              sizes: '512x512',
              type: 'image/png',
              purpose: 'any',
            },
            {
              src: 'assets/pwa-maskable-192x192.png',
              sizes: '192x192',
              type: 'image/png',
              purpose: 'maskable',
            },
            {
              src: 'assets/pwa-maskable-512x512.png',
              sizes: '512x512',
              type: 'image/png',
              purpose: 'maskable',
            },
          ],
        },
        registerType: 'autoUpdate',
      }),
    ],
    preview: {
      host,
      port,
      strictPort: true,
    },
    resolve: {
      alias: {
        '@': resolve('src'),
      },
    },
    ssgOptions: {
      crittersOptions: {
        path: dist,
        preload: 'media',
        fonts: true,
      },
      formatting: 'minify',
      script: 'defer',
      onFinished() {
        generateSitemap({
          basePath: root.substring(1),
          hostname: join(origin, root, '/'),
          outDir,
        });
      },
    },
  };
};
