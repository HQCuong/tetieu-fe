import {
  createWebHistory,
  createRouter,
  RouteRecordRaw, // Import RouteRecordRaw for type safety
} from 'vue-router';
import {
  HomePage,
  NewDetailPage,
  NewsPage,
  PerformancePage,
} from '@/components';

// Define type for routes array
const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'home',
    component: HomePage,
  },
  {
    path: '/news',
    name: 'news',
    component: NewsPage,
  },
  {
    path: '/news/:id',
    name: 'new-detail',
    component: NewDetailPage,
  },
  {
    path: '/performances',
    name: 'performances',
    component: PerformancePage,
  },
  // Catch-all route: Must be the last route
  {
    path: '/:pathMatch(.*)*', // Matches everything that hasn't been matched before
    redirect: '/', // Redirects to the home page
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
