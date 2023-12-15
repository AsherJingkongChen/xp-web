import { defineConfig } from 'cypress';
import viteConfig from './vite.config';

const previewOption = viteConfig({
  command: 'serve',
  mode: 'test',
}).preview;
const host = previewOption?.host ?? 'localhost';
const port = previewOption?.port ?? 4172;

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
    baseUrl: `http://${host}:${port}/`,
    defaultCommandTimeout: 0,
    specPattern: 'test/e2e/**/*.test.ts',
    supportFile: false,
  },
  screenshotOnRunFailure: false,
  video: false,
});
