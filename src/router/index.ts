import {
  createWebHistory,
  createRouter,
} from 'vue-router';
import { HomePage } from '@/components';

const routes = [
  {
    path: '/',
    component: HomePage,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
