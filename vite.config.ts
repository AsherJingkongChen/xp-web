import { join, resolve } from 'node:path';
import { defineConfig } from 'vite';
import { VitePWA } from 'vite-plugin-pwa';
import webfontDownload from 'vite-plugin-webfont-dl';
import generateSitemap from 'vite-ssg-sitemap';
import vue from '@vitejs/plugin-vue';
import { copyFileSync } from 'node:fs';

const noTrailingSlash = (path?: string) => path?.replace(/\/$/, '');
// const setTrailingSlash = (path: string) => path.endsWith('/') ? path + '/' : path;

/**
 * Takes arguments from `process.env`
 * @property {string} HOST - default to `localhost`
 * @property {string} ROOT - base path of the app, default to `/`
 * @property {boolean} UNSECURE - whether origin disables https or not, `true` if set
 */
export default defineConfig(({ mode }) => {
  let { HOST, ROOT, UNSECURE } = process.env;
  const port = 4173;
  const strictPort = !HOST;
  const host = HOST || `localhost:${port}`;
  const origin = `http${UNSECURE ? '' : 's'}://${host}`;
  const root = ROOT || '/';
  const outDir = join(`dist-${host}`, root);

  return {
    base: root,
    build: {
      assetsInlineLimit: 0,
      outDir,
    },
    envDir: join('env', host),
    esbuild: {
      drop: mode === 'production' ? ['debugger'] : undefined,
    },
    plugins: [
      vue(),
      VitePWA({
        // Service Worker Configuration Reference:
        // [vite-plugin-pwa](https://github.com/vite-pwa/vite-plugin-pwa/blob/main/docs/scripts/pwa.ts)
        devOptions: {
          enabled: mode === 'development',
        },
        includeManifestIcons: false,
        registerType: 'autoUpdate',
        workbox: {
          globIgnores: ['**/pwa-screenshot*', '**/manifest.webmanifest'],
          globPatterns: ['**/*'],
        },
        manifest: {
          id: origin,
          scope: root,
          start_url: root,
          name: 'XP App',
          short_name: 'XP App',
          description: 'Any file previewer',
          background_color: '#503030',
          theme_color: '#503030',
          orientation: 'any',
          display: 'standalone',
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
        // Fonts are critical resources, so we should preload them.
        {
          async: false,
          injectAsStyleTag: false,
        },
      ),
    ],
    preview: {
      port,
      strictPort,
    },
    resolve: {
      alias: {
        '@': resolve('src'),
      },
    },
    ssgOptions: {
      formatting: 'minify',
      script: 'defer',
      onFinished() {
        generateSitemap({
          basePath: noTrailingSlash(root),
          hostname: new URL(root, origin).href,
          outDir,
        });

        // Copy `index.html` as fallback pages
        const indexPage = join(outDir, 'index.html');
        const notFoundPage = join(outDir, '404.html');
        copyFileSync(indexPage, notFoundPage);
      },
    },
  };
});
