# xp-web (Web package of XP)

[![Vercel Deployment](https://img.shields.io/github/deployments/AsherJingkongChen/xp-web/Production?label=vercel.app&logo=Vercel)](https://xp-web.vercel.app)
[![GitHub Pages Deployment](https://img.shields.io/github/deployments/AsherJingkongChen/xp-web/github-pages?label=github.io&logo=GitHub)](https://asherjingkongchen.github.io/xp-web/)
[![CI Status](https://img.shields.io/github/actions/workflow/status/AsherJingkongChen/xp-web/ci.yml?label=CI&logo=GitHub)](https://github.com/AsherJingkongChen/xp-web/actions/workflows/ci.yml)

## What is it for?

With XP Web, you can preview any file in your browser.

## Try Our Demo

- [On Vercel](https://xp-web.vercel.app) (Recommended)
- [On GitHub Pages](https://asherjingkongchen.github.io/xp-web/) (Alternative)

## Let's Setup the Project

> **Note:** This section is for contributors and developers only

### Recommended IDE Setup for you

[VSCode](https://code.visualstudio.com/) + [Volar](https://marketplace.visualstudio.com/items?itemName=Vue.volar) (and disable Vetur) + [TypeScript Vue Plugin (Volar)](https://marketplace.visualstudio.com/items?itemName=Vue.vscode-typescript-vue-plugin).

### Install Dependencies

```sh
npm install
```

### Launch a Development Server with Hot-Reloading

```sh
npm run dev
```

### Format with [Prettier](https://prettier.io/)

```sh
npm run format
```

### Compile and Bundle for Your Deployment

```sh
npm run build
```

**Note:** The output directory starts with `dist`.

### Preview Your Deployment on `localhost`

```sh
npm run preview
```

**Note:** To clear caches for XP Web, which is a **Progressive Web Application**. You will need to unregister the service worker, or hold `Shift` key to force-reload the page.

### Run All Tests

```sh
npm run test      # Unit Tests + E2E Tests
npm run test:unit # Unit Tests
```

### Run E2E Tests

#### 1st Session

```sh
npm run preview
```

#### 2nd Session

```sh
npm run test:e2e
```

**Note:** The command `test:e2e` depends on `vite preview` which serves web artifacts. The preview server will watch file changes in `dist` directory.

### Run Tests on [Cypress's beautiful GUI](https://www.cypress.io/)

```sh
npm run test:gui
```

### The Convenient Way to Ensure The Program Works

```sh
npm run prepublish
```

**Note:** The command should always be run successfully before a release commit or a pull request. Also, it's better to run E2E tests before merge into the `main` branch.

### Deploy to Your Sites (GitHub Pages)

```sh
npm run deploy:gh-pages
```

**Note 1:** You can replace the subdomain in [`package.json`](./package.json) with your GitHub organization name.

**Note 2:** You can configure for critical environment variables at files matching `env/**/.env.production`.

### Miscellaneous Commands

```sh
npm run x:* # Shortcuts, should not be used directly
npm run pub # Literally All-in-One
```
