import 'vite-ssg';
import { fileURLToPath, URL } from 'node:url';
import { ConfigEnv, defineConfig, UserConfig } from 'vite';
import { VitePWA } from 'vite-plugin-pwa';
import generateSitemap from 'vite-ssg-sitemap';
import vue from '@vitejs/plugin-vue';
import { join } from 'node:path';

const host = 'localhost';
const port = 4172;

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
    esbuild: {
      drop:
        env.mode === 'production' ? ['console', 'debugger'] : undefined,
    },
    plugins: [
      vue(),
      VitePWA({
        manifest: {
          name: 'XP Web',
          short_name: 'XP',
          description: 'Any file previewer',
          lang: 'en',
          background_color: '#ffffff',
          theme_color: '#ffffff',
          icons: [
            {
              src: 'assets/favicon-72x72.png',
              type: 'image/png',
              sizes: '72x72',
              purpose: 'any maskable',
            },
            {
              src: 'assets/favicon-96x96.png',
              type: 'image/png',
              sizes: '96x96',
              purpose: 'any maskable',
            },
            {
              src: 'assets/favicon-128x128.png',
              type: 'image/png',
              sizes: '128x128',
              purpose: 'any maskable',
            },
            {
              src: 'assets/favicon-144x144.png',
              type: 'image/png',
              sizes: '144x144',
              purpose: 'any maskable',
            },
            {
              src: 'assets/favicon-152x152.png',
              type: 'image/png',
              sizes: '152x152',
              purpose: 'any maskable',
            },
            {
              src: 'assets/favicon-192x192.png',
              type: 'image/png',
              sizes: '192x192',
              purpose: 'any maskable',
            },
            {
              src: 'assets/favicon-384x384.png',
              type: 'image/png',
              sizes: '384x384',
              purpose: 'any maskable',
            },
            {
              src: 'assets/favicon-512x512.png',
              type: 'image/png',
              sizes: '512x512',
              purpose: 'any maskable',
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
        '@': fileURLToPath(new URL('./src', import.meta.url)),
      },
    },
    ssgOptions: {
      crittersOptions: {
        path: dist,
        preload: 'media',
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

export default defineConfig((env) =>
  customConfigFn({
    dist: 'dist',
    env,
    origin: `http://${host}:${port}`,
    root: '/',
  }),
);
