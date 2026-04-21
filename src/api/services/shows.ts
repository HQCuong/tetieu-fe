import { http } from '@/api/http';
import { ENDPOINTS } from '@/api/endpoints';
import { logger } from '@/utils/logger';
import type {
  PaginatedResponse,
  ShowItem,
} from '@/types';

export interface GetShowsParams {
  sort?: string;
  where?: string;
}

export const showsService = {
  async getShows(params: GetShowsParams = {}): Promise<PaginatedResponse<ShowItem> | null> {
    try {
      const res = await http.get<PaginatedResponse<ShowItem>>(ENDPOINTS.shows, {
        params: {
          sort: params.sort || '-CreatedAt',
          ...(params.where ? { where: params.where } : {}),
        },
      });

      return res.data;
    } catch (error) {
      logger.error('Failed to fetch shows', error);

      return null;
    }
  },

  async getShowById(id: string): Promise<ShowItem | null> {
    try {
      const res = await http.get<ShowItem>(`${ENDPOINTS.shows}/${id}`);

      return res.data;
    } catch (error) {
      logger.error(`Failed to fetch show ${id}`, error);

      return null;
    }
  },
};
