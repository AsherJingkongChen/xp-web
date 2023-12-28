import { defineConfig, type PluginOption } from 'vite';
import { sveltekit } from '@sveltejs/kit/vite';
import { SvelteKitPWA } from '@vite-pwa/sveltekit';
import {
  BUILD_BASE_URL,
  BUILD_BASE_PATH_SLASHED,
  PREVIEW_BASE_URL,
} from './env.config.js';

export default defineConfig(({ mode }) => {
  return {
    build: {
      assetsInlineLimit: 0,
    },
    esbuild: {
      drop:
        mode === 'production'
          ? ['console', 'debugger']
          : undefined,
    },
    plugins: [
      customPostBuild(),
      customSvelteKitPWA(),
      sveltekit(),
    ],
    preview: {
      host: PREVIEW_BASE_URL.hostname,
      port: Number(PREVIEW_BASE_URL.port),
      strictPort: true,
    },
  };
  function customPostBuild(): PluginOption {
    return {
      name: 'virtual:post-build',
      closeBundle() {
        console.log({
          BUILD_BASE_URL: BUILD_BASE_URL.href,
        });
      },
    };
  }
  function customSvelteKitPWA(): PluginOption {
    return SvelteKitPWA({
      devOptions: {
        enabled: mode === 'development',
      },
      filename: 'service-worker.js',
      includeManifestIcons: false,
      registerType: 'autoUpdate',
      strategies: 'generateSW',
      workbox: {
        globIgnores: [
          'server/**/*',
          '**/*.webmanifest',
          '**/screenshots/**/*',
        ],
        globPatterns: ['**/*'],
        manifestTransforms: [
          function transformPrerenderedSlashed(manifest) {
            for (const entry of manifest) {
              entry.url = entry.url
                .replace(
                  /^(client|prerendered\/(dependencies|pages))\//,
                  '',
                )
                .replace(/(.*)index\.html$/, '$1')
                .replace(/^\/?$/, BUILD_BASE_PATH_SLASHED);
            }
            return { manifest };
          },
        ],
        maximumFileSizeToCacheInBytes:
          Number.MAX_SAFE_INTEGER,
        navigateFallback: '404.html',
      },
      manifest: {
        id: BUILD_BASE_URL.origin,
        scope: BUILD_BASE_PATH_SLASHED,
        start_url: BUILD_BASE_PATH_SLASHED,
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
            src: 'assets/logo/favicon-192x192.png',
            sizes: '192x192',
            type: 'image/png',
            purpose: 'any',
          },
          {
            src: 'assets/logo/favicon-512x512.png',
            sizes: '512x512',
            type: 'image/png',
            purpose: 'any',
          },
          {
            src: 'assets/logo/favicon-maskable-192x192.png',
            sizes: '192x192',
            type: 'image/png',
            purpose: 'maskable',
          },
          {
            src: 'assets/logo/favicon-maskable-512x512.png',
            sizes: '512x512',
            type: 'image/png',
            purpose: 'maskable',
          },
        ],
        screenshots: [
          {
            label: 'Home Page',
            src: 'assets/screenshots/landscape-2560x1600.png',
            sizes: '2560x1600',
            type: 'image/png',
            form_factor: 'wide',
          },
          {
            label: 'Home Page',
            src: 'assets/screenshots/portrait-1082x2402.png',
            sizes: '1082x2402',
            type: 'image/png',
            form_factor: 'narrow',
          },
        ],
      },
    });
  }
});
