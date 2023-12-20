import './styles/main.scss';
import { ViteSSG } from 'vite-ssg';
import { router, setupAllModules } from './modules';
import App from './App.vue';

export const createApp: ReturnType<typeof ViteSSG> = ViteSSG(
  App,
  router,
  setupAllModules,
);
