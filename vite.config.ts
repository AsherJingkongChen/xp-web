import { defineConfig, type PluginOption } from 'vite';
import { sveltekit } from '@sveltejs/kit/vite';
import { SvelteKitPWA } from '@vite-pwa/sveltekit';
import { createSitemap } from 'svelte-sitemap/src';
import {
  BUILD_BASE_URL,
  BUILD_BASE_PATH_SLASHED,
  PREVIEW_BASE_URL,
} from './env.config.js';

export default defineConfig(({ mode }) => {
  const PAGES_OUTDIR =
    '.svelte-kit/output/prerendered/pages';
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
      customBuildLogger(),
      customSitemapGenerator(),
      customSvelteKitPWA(),
      sveltekit(),
    ],
    preview: {
      host: PREVIEW_BASE_URL.hostname,
      port: Number(PREVIEW_BASE_URL.port),
      strictPort: true,
    },
  };
  function customBuildLogger(): PluginOption {
    const logger = () => {
      console.log(
        '\x1b[91;1m> Using these build arguments:\x1b[0m',
      );
      console.log({
        BUILD_BASE_URL: BUILD_BASE_URL.href,
        BUILD_BASE_PATH_SLASHED,
      });
    };
    return {
      name: 'custom-build-logger',
      apply: 'build',
      config: logger,
      closeBundle: logger,
    };
  }
  function customSitemapGenerator(): PluginOption {
    return {
      name: 'custom-sitemap-generator',
      apply: 'build',
      closeBundle: {
        order: 'pre',
        sequential: true,
        async handler() {
          await createSitemap(BUILD_BASE_URL.href, {
            changeFreq: 'daily',
            ignore: ['/404.html'],
            outDir: PAGES_OUTDIR,
            resetTime: true,
            trailingSlashes: true,
          });
        },
      },
      enforce: 'pre',
    };
  }
  function customSvelteKitPWA(): PluginOption {
    function* gridIterator(...arrays: any[][]) {
      const lengths = arrays.map((arr) => arr.length);
      const product = lengths.reduce((a, b) => a * b);
      for (let nth = 0; nth < product; nth++) {
        let nthValue = nth;
        yield lengths.map((length, ath) => {
          let selection = nthValue % length;
          nthValue = (nthValue - selection) / length;
          return arrays[ath][selection];
        });
      }
    }
    return SvelteKitPWA({
      devOptions: {
        enabled: mode === 'development',
      },
      filename: 'service-worker.js',
      includeManifestIcons: false,
      injectRegister: 'auto',
      registerType: 'autoUpdate',
      strategies: 'generateSW',
      workbox: {
        cleanupOutdatedCaches: true,
        disableDevLogs: mode === 'development',
        globIgnores: [
          'client/assets/screenshots/**/*.png',
          'server/**/*',
          '**/*.webmanifest', // deduplication
        ],
        globPatterns: ['**/*'],
        manifestTransforms: [
          function transformPrerenderedSlashed(manifest) {
            for (const entry of manifest) {
              entry.url = entry.url
                .replace(
                  /^(client|prerendered\/[^\/]*)\//,
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
        background_color: 'hsl(0, 30%, 20%)',
        description: 'Any file previewer',
        display: 'standalone',
        display_override: [
          'window-controls-overlay',
          'standalone',
          'minimal-ui',
        ],
        handle_links: 'preferred',
        id: BUILD_BASE_URL.origin,
        name: 'XP',
        orientation: 'any',
        scope: BUILD_BASE_PATH_SLASHED,
        short_name: 'XP',
        start_url: BUILD_BASE_PATH_SLASHED,
        theme_color: 'hsl(0, 30%, 20%)',
        icons: Array.from(
          gridIterator(
            ['any', 'maskable'],
            ['192x192', '512x512'],
          ),
        ).map(([purpose, sizes]) => ({
          purpose,
          src: `assets/logo/favicon-${purpose}-${sizes}.png`,
          sizes,
          type: 'image/png',
        })),
        screenshots: Array.from(
          gridIterator(
            ['Home'],
            [
              ['1442x3203', 'narrow'],
              ['2560x1600', 'wide'],
            ],
          ),
        ).map(([label, [sizes, form_factor]]) => ({
          form_factor,
          label,
          src: `assets/screenshots/${label}-${sizes}.avif`,
          sizes,
          type: 'image/avif',
        })),
      },
    });
  }
});
