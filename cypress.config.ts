import { defineConfig } from 'cypress';
import viteConfig from './vite.config';

const { host, port } = viteConfig({
  command: 'serve',
  mode: 'test',
}).preview!;

export default defineConfig({
  component: {
    devServer: {
      bundler: 'vite',
      framework: 'vue',
    },
    specPattern: 'test/unit/**/*.test.ts',
    supportFile: false,
  },
  e2e: {
    baseUrl: `http://${host ?? 'localhost'}:${port ?? 4173}/`,
    defaultCommandTimeout: 0,
    specPattern: 'test/e2e/**/*.test.ts',
    supportFile: false,
  },
  screenshotOnRunFailure: false,
  video: false,
});
