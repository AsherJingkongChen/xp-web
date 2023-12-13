import type { RouterOptions } from 'vue-router';
import GuideView from '@/views/GuideView.vue';
import HomeView from '@/views/HomeView.vue';
import InfoView from '@/views/InfoView.vue';

export const routes: RouterOptions['routes'] = [
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
];
