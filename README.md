# xp-web (Web package of XP)

[![GitHub Pages Deployment](https://img.shields.io/github/deployments/AsherJingkongChen/xp-web/github-pages?label=github.io&logo=GitHub)](https://asherjingkongchen.github.io/xp-web/)
[![Netlify Deployment](https://img.shields.io/netlify/b69d5757-4329-4328-bd99-a71505b14a39?label=netlify.app&logo=Netlify)](https://xp-web.netlify.app)
[![Vercel Deployment](https://img.shields.io/github/deployments/AsherJingkongChen/xp-web/Production?label=vercel.app&logo=Vercel)](https://xp-web.vercel.app)

## What is it for?

With XP Web, you can preview any file in your browser.

## Try Our Demo

- [On GitHub Pages](https://asherjingkongchen.github.io/xp-web/)
- [On Netlify](https://xp-web.netlify.app/)
- [On Vercel](https://xp-web.vercel.app/)

## Let's Setup the Project

> **Note:** THIS section is for contributors and developers only

### Recommended IDE Setup for You

- IDE:
  - [VSCode](https://code.visualstudio.com/)
  - Extensions:
    - [Prettier](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode)
    - [SCSS](https://marketplace.visualstudio.com/items?itemName=mrmlnc.vscode-scss)
    - [Svelte](https://marketplace.visualstudio.com/items?itemName=svelte.svelte-vscode)

### See What Dependencies We Are Using

- Build
  - [Bun](https://bun.sh/)
  - [Dotenv](https://www.dotenv.org/)
  - [HTML Minifier](https://github.com/kangax/html-minifier)
  - [Node.js](https://nodejs.org/)
  - [Optimizt](https://github.com/343dev/optimizt)
  - [Vite](https://vitejs.dev/)
- Deploy
  - [GitHub Actions](https://github.com/features/actions)
  - [GitHub Pages](https://pages.github.com/)
  - [Netlify](https://www.netlify.com/)
  - [Vercel](https://vercel.com/)
- Design
  - [Favicon InBrowser.App](https://favicon.inbrowser.app/tools/favicon-generator)
  - [Figma](https://www.figma.com/)
  - [Fontsource](https://fontsource.org/)
- Linters
  - [Prettier](https://prettier.io/)
  - [svelte-check](https://www.npmjs.com/package/svelte-check)
  - [TypeScript](https://www.typescriptlang.org/)
- Test
  - [Cypress](https://www.cypress.io/)
- Web
  - [SASS/SCSS](https://sass-lang.com/)
  - [Svelte](https://svelte.dev/)
  - [SvelteKit](https://kit.svelte.dev/)
  - [Vite PWA](https://vite-pwa-org.netlify.app/)

You can install most of them with:

| Package Manager                      | Command        | Shorthand |
| ------------------------------------ | -------------- | --------- |
| [bun](https://bun.sh/) (Recommended) | `bun install`  | `bun i`   |
| [npm](https://www.npmjs.com/)        | `npm install`  | `npm i`   |
| [pnpm](https://pnpm.io/)             | `pnpm install` | `pnpm i`  |
| [yarn](https://yarnpkg.com/)         | `yarn install` | `yarn`    |

### See What Commands We Are Using

The syntax to run scripts:

```sh
<bun | pnpm | npm | yarn> run <Script>
```

| Script        | Description                                   |
| ------------- | --------------------------------------------- |
| build         | Builds the application using Vite             |
| build:preview | Builds and previews                           |
| build:stable  | Builds and Optimize the application           |
| check         | Checks the source code with Svelte            |
| format        | Formats the code using Prettier               |
| optimize      | Optimizes the static assets                   |
| prepack       | Runs before building for deployment           |
| preview       | Previews the application using Vite           |
| start         | Builds the stable version and previews        |
| serve         | Serves the application using Vite dev server  |
| test:e2e      | Runs end-to-end tests using Cypress           |
| test:gui      | Opens the Cypress GUI for interactive testing |

### Be Aware of These Details

You may encounter some problems during development and deployment.
Please read the following notes carefully.

1. To clear caches for this PWA, or **Progressive Web Application**. You need to unregister the service worker, or hold `Shift` key to force-reload the page. Also, be careful with Workbox options. You may find some errors in the dev console after modifying them.
2. The script `test:e2e` depends on another script `preview` which serves the application on `localhost:4173`. The preview server will watch file changes in `build` directory.
3. The application artifacts after building is at `build` directory. The directory is ignored by Git.
4. The environment variables are configured at files matching `env/**/.env*`. You can configure them and rename the directory paths. Before running commands, you can set the environment variable `BUILD_ENV_DIR` to the environment directory path.

- macOS (Bash / Zsh): `export BUILD_ENV_DIR=env/localhost:4173`
  - Peek variable: `echo $BUILD_ENV_DIR`
- Windows (CMD): `set BUILD_ENV_DIR=.\env\localhost:4173`
  - Peek variable: `echo %BUILD_ENV_DIR%`
- Windows (PowerShell): `$Env:BUILD_ENV_DIR = '.\env\localhost:4173'`
  - Peek variable: `$Env:BUILD_ENV_DIR`
