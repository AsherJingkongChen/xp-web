const { defineConfig } = require('cypress');

module.exports = defineConfig({
  component: {
    supportFile: false,
    devServer: {
      bundler: 'vite',
      framework: 'vue',
      // viteConfig: {
      //   server: {
      //     port: 4173,
      //   },
      // },
    },
  },
  e2e: {
    baseUrl: 'http://localhost:4173/',
    specPattern: 'test/**/*.test.ts',
    screenshotOnRunFailure: false,
    supportFile: false,
    video: true,
  },
});
