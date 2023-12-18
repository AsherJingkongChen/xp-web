import { RouterOptions } from 'vue-router';
import GuideView from '@/views/GuideView.vue';
import HomeView from '@/views/HomeView.vue';
import InfoView from '@/views/InfoView.vue';
import PageNotFountViewVue from '@/views/fallbacks/PageNotFountView.vue';

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
  {
    path: '/:pathMatch(.*)*',
    name: "Page Not Found - Let's preview files at home page?",
    meta: {
      description:
        "Oops! The page you're searching for " +
        'is not found in XP-powered digital realm. ' +
        "Navigate back or explore our file previewer's " +
        'intriguing corners.',
      robots: 'nofollow, noindex',
    },
    
    component: PageNotFountViewVue,
  },
];
