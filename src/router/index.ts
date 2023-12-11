import { createRouter, createWebHistory } from 'vue-router';
import GuideView from '@/views/GuideView.vue';
import HomeView from '@/views/HomeView.vue';
import InfoView from '@/views/InfoView.vue';

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
      component: GuideView,
    },
    {
      path: '/info',
      name: 'Info',
      component: InfoView,
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
