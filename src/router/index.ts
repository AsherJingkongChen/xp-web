import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '@/views/HomeView.vue';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'Home',
      component: HomeView,
    },
    {
      path: '/guide',
      name: 'Guide',
      component: HomeView,
    },
    {
      path: '/info',
      name: 'Info',
      component: HomeView,
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
