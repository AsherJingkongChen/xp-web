# xp-web (Web package of XP)

[![GitHub Pages Build Status](https://img.shields.io/github/actions/workflow/status/AsherJingkongChen/xp-web/pages/pages-build-deployment?label=Github%20Pages&logo=GitHub)](https://github.com/AsherJingkongChen/xp-web/actions/workflows/pages/pages-build-deployment) [![CI Status](https://img.shields.io/github/actions/workflow/status/AsherJingkongChen/xp-web/ci.yml?label=CI&logo=GitHub)](https://github.com/AsherJingkongChen/xp-web/actions/workflows/ci)

## What is it for?

With XP Web, you can preview any file in your browser.

## Try Our Demo

[On GitHub Pages](https://asherjingkongchen.github.io/xp-web/)

## Let's Setup the Project

> This section is for contributors and developers only

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

**Note:** The base URL is [http://localhost:4172/](http://localhost:4172/). You can configure it in [`vite.config.ts`](./vite.config.ts).

### Run All Tests

```sh
npm run test
```

**Note:** The command `test` excludes e2e tests.

### Run E2E Tests

#### Session 1

```sh
npm run preview
```

#### Session 2

```sh
npm run test:e2e
```

**Note:** The command `test:e2e` depends on `vite preview` which serves on [http://localhost:4172/](http://localhost:4172/). The preview server will watch file changes in `dist` directory.

### Run Tests on [Cypress's pretty GUI](https://www.cypress.io/)

```sh
npm run test:gui
```

### The Convenient Way to Do All of the Above

```sh
npm run prepublish
```

**Note:** The command should always be run successfully before a release commit or a pull request. Also, it's better to run E2E tests before merge.

### Deploy to Your GitHub Pages (Very Optional)

```sh
npm run deploy:gh-pages
```
