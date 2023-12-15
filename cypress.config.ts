import { defineConfig } from 'cypress';
import { config } from './vite.config';

const previewOption = (
  await config({
    command: 'serve',
    mode: 'test',
  })
).preview;
const host = previewOption ?? 'localhost';
const port = previewOption ?? 4173;

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
    screenshotOnRunFailure: false,
    supportFile: false,
    video: false,
  },
});
