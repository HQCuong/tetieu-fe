import { http } from '@/api/http';
import { ENDPOINTS } from '@/api/endpoints';
import { logger } from '@/utils/logger';
import type {
  NewsItem,
  PaginatedResponse,
} from '@/types';

const DEFAULT_PAGE_SIZE = 5;

export interface GetNewsParams {
  page?: number;
  limit?: number;
}

export const newsService = {
  async getNews(params: GetNewsParams = {}): Promise<PaginatedResponse<NewsItem> | null> {
    const page = params.page && params.page > 0 ? params.page : 1;
    const limit = params.limit ?? DEFAULT_PAGE_SIZE;

    try {
      const res = await http.get<PaginatedResponse<NewsItem>>(ENDPOINTS.news, {
        params: {
          offset: (page - 1) * limit,
          limit,
          sort: '-CreatedAt',
        },
      });

      return res.data;
    } catch (error) {
      logger.error('Failed to fetch news list', error);

      return null;
    }
  },

  async getNewsById(id: string): Promise<NewsItem | null> {
    try {
      const res = await http.get<NewsItem>(`${ENDPOINTS.news}/${id}`);

      return res.data;
    } catch (error) {
      logger.error(`Failed to fetch news ${id}`, error);

      return null;
    }
  },
};
