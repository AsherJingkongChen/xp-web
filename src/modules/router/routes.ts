import type { RouterOptions } from 'vue-router';
import GuideView from '@/views/GuideView.vue';
import HomeView from '@/views/HomeView.vue';
import InfoView from '@/views/InfoView.vue';

export const routes: RouterOptions['routes'] = [
  {
    path: '/',
    name: 'Home',
    meta: {
      description: 'The home page of XP. Users can preview their files here.',
    },
    component: HomeView,
  },
  {
    path: '/guide',
    name: 'Guide',
    meta: {
      description: 'The guide page of XP. Users can learn how to use the application here.',
    },
    component: GuideView,
  },
  {
    path: '/info',
    name: 'Info',
    meta: {
      description: 'The info page of XP. Users can see the information of the application here.',
    },
    component: InfoView,
  },
];
