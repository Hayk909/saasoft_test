import { RouteRecordRaw } from 'vue-router';

import Accounts from '@/views/Accounts.vue';
import HomePage from '@/views/Home.vue';

export const routes: RouteRecordRaw[] = [
  {
    path: '/',
    name: 'home',
    component: HomePage
  },
  {
    path: '/accounts',
    name: 'accounts',
    component: Accounts
  }
];
