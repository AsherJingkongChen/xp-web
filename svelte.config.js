import { join } from 'path';
import { fileURLToPath, URL } from 'url';
import adapterStatic from '@sveltejs/adapter-static';
import sveltePreprocess from 'svelte-preprocess';
import {
  BUILD_BASE_URL,
  BUILD_BASE_PATH_UNSLASHED,
} from './env.config.js';

const styleDir = fileURLToPath(
  new URL('src/lib/styles', import.meta.url),
);

/** @type {import('@sveltejs/kit').Config} */
export default {
  kit: {
    adapter: adapterStatic({
      // Write to `dist/` and use custom `404.html`
      assets: 'dist',
      fallback: undefined,
      pages: 'dist',
      precompress: false,
      strict: true,
    }),
    env: {
      dir: join(
        'env',
        BUILD_BASE_URL.host,
        BUILD_BASE_PATH_UNSLASHED,
      ),
    },
    files: {
      appTemplate: 'src/index.html',
    },
    paths: {
      base: BUILD_BASE_PATH_UNSLASHED,
      relative: false,
    },
    serviceWorker: {
      // Use `@vite-pwa/svelte` instead
      register: false,
    },
  },
  preprocess: [
    sveltePreprocess({
      scss: {
        prependData: `\
          @use 'sass:color';
          @import '${join(styleDir, 'constant.scss')}';
          @import '${join(styleDir, 'mixin.scss')}';
        `,
      },
    }),
  ],
};
