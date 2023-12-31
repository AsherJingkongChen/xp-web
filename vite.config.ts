import { defineConfig, type PluginOption } from 'vite';
import { sveltekit } from '@sveltejs/kit/vite';
import { SvelteKitPWA } from '@vite-pwa/sveltekit';
import { createSitemap } from 'svelte-sitemap/src';
import { writeFile } from 'fs/promises';
import { join } from 'path';
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
      customRobotsTxtGenerator(),
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
  function customRobotsTxtGenerator(): PluginOption {
    return {
      name: 'custom-robots-txt-generator',
      apply: 'build',
      closeBundle: {
        order: 'pre',
        sequential: true,
        async handler() {
          console.log(
            '\x1b[91;1m> Using custom-robots-txt-generator\x1b[0m',
          );
          await writeFile(
            join(PAGES_OUTDIR, 'robots.txt'),
            `\
User-agent: *
Disallow:

Sitemap: ${new URL('sitemap.xml', BUILD_BASE_URL)}
`,
            {
              encoding: 'utf-8',
            },
          ).catch(console.error);
        },
      },
      enforce: 'pre',
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
        name: 'XP App',
        orientation: 'any',
        scope: BUILD_BASE_PATH_SLASHED,
        short_name: 'XP App',
        start_url: BUILD_BASE_PATH_SLASHED,
        theme_color: 'hsl(0, 30%, 20%)',
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
            src: 'assets/screenshots/portrait-1442x3203.png',
            sizes: '1442x3203',
            type: 'image/png',
            form_factor: 'narrow',
          },
        ],
      },
    });
  }
});
