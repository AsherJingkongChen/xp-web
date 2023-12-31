import { defineConfig } from 'cypress';
import { PREVIEW_BASE_URL } from './env.config.js';

export default defineConfig(
  (() => {
    console.log({
      PREVIEW_BASE_URL: PREVIEW_BASE_URL.href,
    });
    return {
      e2e: {
        baseUrl: PREVIEW_BASE_URL.href,
        defaultCommandTimeout: 50,
        specPattern: 'tests/e2e/**/*.test.ts',
        supportFile: false,
      },
      screenshotOnRunFailure: false,
      video: false,
    };
  })(),
);
