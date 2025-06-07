import { RouteRecordRaw } from 'vue-router';

import Accounts from '@/views/Accounts.vue';
import HomePage from '@/views/Home.vue';

import { AppRoutes, AppRoutesName } from '../enums/Common';

export const routes: RouteRecordRaw[] = [
  {
    path: AppRoutes.HOME,
    name: AppRoutesName.HOME,
    component: HomePage
  },
  {
    path: AppRoutes.ACCOUNTS,
    name: AppRoutesName.ACCOUNTS,
    component: Accounts
  }
];
