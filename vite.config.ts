import { join, resolve } from 'node:path';
import { ConfigEnv, defineConfig, UserConfig } from 'vite';
import { VitePWA } from 'vite-plugin-pwa';
import webfontDownload from 'vite-plugin-webfont-dl';
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
        // Service Worker Configuration Reference:
        // [vite-plugin-pwa](https://github.com/vite-pwa/vite-plugin-pwa/blob/main/docs/scripts/pwa.ts)
        includeManifestIcons: false,
        registerType: 'autoUpdate',
        workbox: {
          globIgnores: ['**/pwa-screenshot*', '**/manifest.webmanifest'],
          globPatterns: ['**/*'],
        },
        manifest: {
          id: '/',
          name: 'XP App',
          short_name: 'XP App',
          description: 'Any file previewer',
          background_color: '#503030',
          theme_color: '#503030',
          orientation: 'any',
          display_override: [
            'window-controls-overlay',
            'standalone',
            'minimal-ui',
          ],
          handle_links: 'preferred',
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
          screenshots: [
            {
              label: 'Home Page',
              src: 'assets/pwa-screenshot-portrait-1082x2402.png',
              sizes: '1082x2402',
              type: 'image/png',
              form_factor: 'narrow',
            },
            {
              label: 'Home Page',
              src: 'assets/pwa-screenshot-landscape-2560x1600.png',
              sizes: '2560x1600',
              type: 'image/png',
              form_factor: 'wide',
            },
          ],
        },
      }),
      webfontDownload(
        // The font files should be under `dist*/assets/` after build.
        [
          'https://fonts.googleapis.com/css2?' +
            'family=Noto+Sans:wght@400;600;700&' +
            'family=Play:wght@700&' +
            'display=swap',
        ],
        // The options are strange.
        // Anyway, it should load CSS asynchronously.
        {
          async: false,
          injectAsStyleTag: false,
        },
      ),
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
        inlineFonts: true,
        preloadFonts: false,
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
