import { http } from '@/api/http';
import { ENDPOINTS } from '@/api/endpoints';
import { logger } from '@/utils/logger';
import type {
  PaginatedResponse,
  Performance,
} from '@/types';

export interface GetPerformancesParams {
  page?: number;
  limit?: number;
  sort?: string;
  // NocoDB-style where clause, e.g. `(Date_Time,ge,daysFromNow,0)`.
  where?: string;
}

export const performancesService = {
  async getPerformances(params: GetPerformancesParams = {}): Promise<PaginatedResponse<Performance> | null> {
    const page = params.page && params.page > 0 ? params.page : 1;
    const { limit, sort, where } = params;

    const query: Record<string, string | number> = {
      offset: limit ? (page - 1) * limit : 0,
    };

    if (limit !== undefined) { query.limit = limit; }
    if (sort) { query.sort = sort; }
    if (where) { query.where = where; }

    try {
      const res = await http.get<PaginatedResponse<Performance>>(ENDPOINTS.performances, { params: query });

      return res.data;
    } catch (error) {
      logger.error('Failed to fetch performances', error);

      return null;
    }
  },
};
