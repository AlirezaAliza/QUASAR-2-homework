import { RouteCallback } from '@quasar/app-vite';
import { route } from 'quasar/wrappers';
import { RouteRecordRaw, RouteRecordRedirectOption } from 'vue-router';

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    component: () => import('layouts/auth/authLayout.vue'),
    redirect: <RouteRecordRedirectOption> route( <RouteCallback>{name: 'loginPage'}),
    children: [
      {
        path: 'LoginPage',
        name: 'loginPage',
        component: () => import('pages/auth/LoginPage.vue')
      }
    ],
  },
  {
    path: '/',
    component: () => import('layouts/auth/authLayout.vue'),
    children: [
      {
        path: 'registerPage',
        component: () => import('pages/auth/RegisterPage.vue')
      }
    ],
  },
  {
    path: '/Dashboard',
    component: () => import('layouts/Dashbourd/dashbourdLayout.vue'),
    children: [
      {
        path: 'index',
        component: () => import('pages/Dashboard/DashboardPage.vue')
      }
    ],
  },

  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/ErrorNotFound.vue'),
  },
];

export default routes;
