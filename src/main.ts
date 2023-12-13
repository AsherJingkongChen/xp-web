import './styles/main.scss';

// import { createPinia } from 'pinia';
import { ViteSSG } from 'vite-ssg';
import { setupRouter } from '@/modules';
import { routerOptions } from '@/modules/router';
import App from '@/App.vue';

export const createApp: ReturnType<typeof ViteSSG> = ViteSSG(
  App,
  routerOptions,
  (context) => {
    setupRouter(context);
  },
);

// const app = createApp(App);

// app.use(createPinia());
// app.use(router);

// app.mount('#app');
