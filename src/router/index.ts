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
  ContactPage,
  ShowPage,
  HistoryPage,
  InfoPage,
  ShowDetailPage,
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
  {
    path: '/shows',
    name: 'shows',
    component: ShowPage,
  },
  {
    path: '/shows/:id',
    name: 'show-detail',
    component: ShowDetailPage,
  },
  {
    path: '/contact',
    name: 'contact',
    component: ContactPage,
  },
  {
    path: '/history',
    name: 'history',
    component: HistoryPage,
  },
  {
    path: '/info',
    name: 'info',
    component: InfoPage,
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
