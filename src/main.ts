import './styles/main.scss';

// import { createPinia } from 'pinia';
import { ViteSSG } from 'vite-ssg';
import { router, setupAllModules } from './modules';
import App from './App.vue';

export const createApp: ReturnType<typeof ViteSSG> = ViteSSG(
  App,
  router,
  setupAllModules,
);

export default createApp;

// const app = createApp(App);
// app.use(createPinia());
// app.mount('#app');
