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
      },
      {
        path: 'registerPage',
        name: 'registerPage'
        component: () => import('pages/auth/RegisterPage.vue')
      }
    ],
  },
  {
    path: '/dashboard',
    component: () => import('layouts/Dashboard/DashboardLayout.vue'),
    children: [
      {
        path: 'search',
        name: 'search',
        component: () => import('pages/Dashboard/SearchPage.vue')
      },
      {
        path: 'index',
        name: 'index',
        component: () => import('pages/Dashboard/IndexPage.vue')
      },
      {
        path: 'myPost',
        name: 'myPost',
        component: () => import('pages/Dashboard/MyPostPage.vue')
      },
      {
        path: 'allPost',
        name: 'allPost',
        component: () => import('pages/Dashboard/AllPostPage.vue')
      },
      {
        path: 'allUser',
        name: 'allUser',
        component: () => import('pages/Dashboard/AllUserPage.vue')
      }
    ],
  },

  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/ErrorNotFound.vue'),
  },
];

export default routes;
