import 'vite-ssg';
import { join, resolve } from 'node:path';
import { ConfigEnv, defineConfig, UserConfig } from 'vite';
import { VitePWA } from 'vite-plugin-pwa';
import generateSitemap from 'vite-ssg-sitemap';
import vue from '@vitejs/plugin-vue';

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
    envDir: join('env', dist),
    esbuild: {
      drop:
        env.mode === 'production' ? ['console', 'debugger'] : undefined,
    },
    plugins: [
      vue(),
      VitePWA({
        manifest: {
          name: 'XP App',
          short_name: 'XP',
          description: 'Any file previewer',
          lang: 'en',
          background_color: '#503030',
          theme_color: '#301D30',
          icons: [72, 96, 128, 144, 152, 192, 384, 512].map((size) => ({
            src: `assets/favicon-${size}x${size}.png`,
            type: 'image/png',
            sizes: `${size}x${size}`,
            purpose: 'any maskable',
          })),
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
        '@': resolve('src'),
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
