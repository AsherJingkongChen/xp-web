import type { RouterOptions } from 'vite-ssg';
import type { SetupModuleFunction } from '@/modules';
import { routes } from './routes';

export const routerOptions: RouterOptions = {
  base: import.meta.env.BASE_URL,
  routes,
};

export const setupRouter: SetupModuleFunction = ({ router }) => {
  if (import.meta.env.DEV) {
    router.beforeEach((to, from, next) => {
      console.log(
        `[vue-router] "${to.path}" <- "${from.path}"`,
      );
      next();
    });
  }
};
