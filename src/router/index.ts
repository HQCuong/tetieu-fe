import {
  createRouter,
  createWebHistory,
  type RouteRecordRaw,
} from 'vue-router';
import {
  ContactPage,
  HistoryPage,
  HomePage,
  InfoPage,
  MemberPage,
  NewsDetailPage,
  NewsPage,
  PerformancePage,
  ShowDetailPage,
  ShowPage,
} from '@/views';

const routes: RouteRecordRaw[] = [
  { path: '/',              name: 'home',         component: HomePage },
  { path: '/news',          name: 'news',         component: NewsPage },
  { path: '/news/:id',      name: 'news-detail',  component: NewsDetailPage },
  { path: '/performances',  name: 'performances', component: PerformancePage },
  { path: '/shows',         name: 'shows',        component: ShowPage },
  { path: '/shows/:id',     name: 'show-detail',  component: ShowDetailPage },
  { path: '/contact',       name: 'contact',      component: ContactPage },
  { path: '/history',       name: 'history',      component: HistoryPage },
  { path: '/info',          name: 'info',         component: InfoPage },
  { path: '/members',       name: 'members',      component: MemberPage },
  // Catch-all — redirect unknown paths to home.
  { path: '/:pathMatch(.*)*', redirect: '/' },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
