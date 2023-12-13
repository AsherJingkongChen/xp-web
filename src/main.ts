import './styles/main.scss';

// import { createPinia } from 'pinia';
import { ViteSSG } from 'vite-ssg';
import { setupRouter } from './modules';
import { routerOptions } from './modules/router';
import App from './App.vue';

export const createApp: ReturnType<typeof ViteSSG> = ViteSSG(
  App,
  routerOptions,
  (context) => {
    setupRouter(context);
  },
);

export default createApp;

// const app = createApp(App);
// app.use(createPinia());
// app.mount('#app');
