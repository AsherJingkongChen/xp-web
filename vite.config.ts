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
      rollupOptions: {
        output: {
          assetFileNames: 'assets/[name]?h=[hash:20][extname]',
          chunkFileNames: 'scripts/[name]?h=[hash:20].[format].js',
          entryFileNames: 'scripts/[name]?h=[hash:20].[format].js',
          sourcemapFileNames: 'sourcemaps/[name]?h=[hash:20].map.[format]',
        }
      }
    },
    envDir: join('env', dist),
    esbuild: {
      drop: env.mode === 'production' ? ['debugger'] : undefined,
    },
    plugins: [
      vue(),
      VitePWA({
        includeManifestIcons: false,
        manifest: {
          name: 'XP App',
          short_name: 'XP',
          description: 'Any file previewer',
          background_color: '#503030',
          theme_color: '#503030',
          orientation: 'any',
          display: 'minimal-ui',
          display_override: [
            'window-controls-overlay',
            'standalone',
            'minimal-ui',
          ],
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
              src: 'assets/screenshot-portrait-1082x2402.png',
              sizes: '1082x2402',
              type: 'image/png',
              form_factor: 'narrow',
            },
            {
              label: 'Home Page',
              src: 'assets/screenshot-landscape-2560x1600.png',
              sizes: '2560x1600',
              type: 'image/png',
              form_factor: 'wide',
            },
          ],
        },
        registerType: 'autoUpdate',
        workbox: {
          dontCacheBustURLsMatching: /\?h=.{20,}$/i,
          globPatterns: ['**/*'],
        },
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
