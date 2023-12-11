import { createRouter, createWebHistory } from 'vue-router';
import Home from '@/views/Home.vue';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home,
    },
    {
      path: '/guide',
      name: 'Guide',
      component: Home,
    },
    {
      path: '/info',
      name: 'Info',
      component: Home,
    },
  ],
});

router.beforeEach((to, from, next) => {
  console.log(`router.beforeEach "${from.fullPath}" -> "${to.fullPath}"`);
  let pageName = to.name?.toString();
  pageName = pageName ? ` - ${pageName}` : '';
  document.title = import.meta.env.VITE_APP_TITLE_PREFIX + pageName;
  next();
});

export default router;
