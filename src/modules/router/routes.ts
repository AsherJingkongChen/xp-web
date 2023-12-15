import type { RouterOptions } from 'vue-router';
import GuideView from '@/views/GuideView.vue';
import HomeView from '@/views/HomeView.vue';
import InfoView from '@/views/InfoView.vue';

export const routes: RouterOptions['routes'] = [
  {
    path: '/',
    name: 'Home - Any file previewer',
    meta: {
      description:
        'Explore XP to preview diverse files. ' +
        'Start your journey on the home page ' +
        'for an intuitive and versatile file preview experience.',
    },
    component: HomeView,
  },
  {
    path: '/guide',
    name: 'Guide - Learn how to preview files',
    meta: {
      description:
        "Master XP's file preview capabilities on the guide page. " +
        'Discover expert tips and tricks to ' +
        'enhance your file previewing skills effortlessly.',
    },
    component: GuideView,
  },
  {
    path: '/info',
    name: 'Info - About this file previewer',
    meta: {
      description:
        'Get insights into XP, the ultimate file previewer. ' +
        'Visit the info page to unravel the details ' +
        'and understand the uniqueness of this application.',
    },
    component: InfoView,
  },
];
