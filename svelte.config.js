import { join } from 'path';
import { fileURLToPath, URL } from 'url';
import adapter from '@sveltejs/adapter-static';
import sveltePreprocess from 'svelte-preprocess';

const styleDir = fileURLToPath(
  new URL('src/lib/styles', import.meta.url),
);

/** @type {import('@sveltejs/kit').Config} */
export default {
  kit: {
    adapter: adapter({
      assets: 'build',
      fallback: '404.html',
      pages: 'build',
      precompress: false,
      strict: true,
    }),
    env: {
      dir: 'env/github.io',
    },
  },
  preprocess: [
    sveltePreprocess({
      scss: {
        prependData: `\
          @use 'sass:color';
          @import '${join(styleDir, 'constant.scss')}';
          @import '${join(styleDir, 'font.scss')}';
          @import '${join(styleDir, 'mixin.scss')}';
        `,
      },
    }),
  ],
};
