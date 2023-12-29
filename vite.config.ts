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
      customPostBuildLogger(),
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
  function customPostBuildLogger(): PluginOption {
    return {
      name: 'virtual:post-build-logger',
      closeBundle() {
        console.log({
          BUILD_BASE_URL: BUILD_BASE_URL.href,
        });
      },
    };
  }
  function customRobotsTxtGenerator(): PluginOption {
    return {
      name: 'virtual:robots-txt-generator',
      apply: 'build',
      closeBundle: {
        order: 'pre',
        sequential: true,
        async handler() {
          const outDir =
            '.svelte-kit/output/prerendered/pages';
          await writeFile(
            join(outDir, 'robots.txt'),
            `\
User-agent: *
Disallow:

Sitemap: ${new URL('sitemap.xml', BUILD_BASE_URL)}
`,
            {
              encoding: 'utf-8',
            },
          ).catch(console.warn);
        },
      },
      enforce: 'pre',
    }
  }
  function customSitemapGenerator(): PluginOption {
    return {
      name: 'virtual:sitemap-generator',
      apply: 'build',
      closeBundle: {
        order: 'pre',
        sequential: true,
        async handler() {
          const outDir =
            '.svelte-kit/output/prerendered/pages';
          await createSitemap(BUILD_BASE_URL.href, {
            changeFreq: 'daily',
            ignore: ['/404.html'],
            outDir,
            resetTime: true,
            trailingSlashes: true,
          });
        },
      },
      enforce: 'pre',
    }
  }
  function customSvelteKitPWA(): PluginOption {
    return SvelteKitPWA({
      devOptions: {
        enabled: true,
      },
      filename: 'service-worker.js',
      includeManifestIcons: false,
      injectRegister: false,
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
        background_color: '#503030',
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
        theme_color: '#503030',
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
