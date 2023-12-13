import type { RouterOptions } from 'vite-ssg';
import type { SetupModuleFunction } from '@/modules';
import { routes } from './routes';

export const routerOptions: RouterOptions = {
  base: import.meta.env.BASE_URL,
  routes,
};

export const setupRouter: SetupModuleFunction = ({ router, isClient }) => {
  router.beforeEach((to, from, next) => {
    if (isClient) {
      console.log(
        `router.beforeEach "${from.fullPath}" -> "${to.fullPath}"`,
      );
      let pageName = to.name?.toString();
      pageName = pageName ? ` - ${pageName}` : '';
      document.title = import.meta.env.VITE_APP_TITLE_PREFIX + pageName;
    }
    next();
  });
};
