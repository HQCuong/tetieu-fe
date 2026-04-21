import type { RouteLocationRaw } from 'vue-router';

export interface NavLink {
  label: string;
  to: RouteLocationRaw;
}

export interface BurgerMenuColumn {
  title: string;
  items: NavLink[];
}

export const NAVIGATION_ITEMS: NavLink[] = [
  { label: 'Lịch diễn', to: '/performances' },
  { label: 'Tin tức', to: '/news' },
  { label: 'Liên hệ', to: '/contact' },
];

export const BURGER_MENU_ITEMS: BurgerMenuColumn[] = [
  {
    title: 'Chương trình',
    items: [
      { label: 'Lịch diễn', to: '/performances' },
      { label: 'Show diễn', to: '/shows' },
    ],
  },
  {
    title: 'Thông tin',
    items: [
      { label: 'Tin tức', to: '/news' },
      { label: 'Lịch sử', to: '/history' },
      { label: 'Chi tiết', to: '/info' },
      { label: 'Thành viên', to: '/members' },
    ],
  },
  {
    title: 'Dịch vụ',
    items: [
      { label: 'Liên hệ', to: '/contact' },
    ],
  },
];
