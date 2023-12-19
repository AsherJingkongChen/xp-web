/* Import stylesheets */

import '@fontsource/noto-sans/400.css';
import '@fontsource/noto-sans/600.css';
import '@fontsource/noto-sans/700.css';
import '@fontsource/play/700.css';
import './styles/main.scss';

/* Setup App */

import { ViteSSG } from 'vite-ssg';
import { router, setupAllModules } from './modules';
import App from './App.vue';

export const createApp: ReturnType<typeof ViteSSG> = ViteSSG(
  App,
  router,
  setupAllModules,
);
