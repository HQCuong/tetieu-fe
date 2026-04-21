import type { SHOW_TYPES } from '@/content/show';

export type Id = string | number;

export interface NewsItem {
  Id: Id;
  Title: string;
  Thumbnail: string;
  Description?: string;
  Content?: string;
  Banner?: string;
  CreatedAt?: string;
}

export interface ShowItem {
  Id: Id;
  Title: string;
  Thumbnail: string;
  Author: string;
  Type: keyof typeof SHOW_TYPES;
  Description?: string;
  Content?: string;
  Banner?: string;
}

export interface Performance {
  Id: number;
  Title: string;
  // Combined ISO date-time field from the API (e.g. `YYYY-MM-DDTHH:mm:ssZ`).
  Date_Time: string;
  URL: string;
  Author: string;
  Location: string;
  CreatedAt: string;
  UpdatedAt: string | null;
}

export interface BannerImage {
  Id: Id;
  Url: string;
}

export interface PageInfo {
  page: number;
  isFirstPage: boolean;
  isLastPage: boolean;
  totalRows?: number;
  pageSize?: number;
}

export interface PaginatedResponse<T> {
  list: T[];
  pageInfo: PageInfo;
}
