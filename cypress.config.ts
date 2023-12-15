import { defineConfig } from 'cypress';
import { previewPort } from './vite.config';

export default defineConfig({
  component: {
    specPattern: 'test/unit/**/*.test.ts',
    devServer: {
      bundler: 'vite',
      framework: 'vue',
      viteConfig: {
        server: {
          port: previewPort,
        },
      },
    },
    supportFile: false,
  },
  e2e: {
    baseUrl: `http://localhost:${previewPort}/`,
    specPattern: 'test/e2e/**/*.test.ts',
    screenshotOnRunFailure: false,
    supportFile: false,
    video: false,
  },
});
