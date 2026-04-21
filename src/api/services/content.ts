import { http } from '@/api/http';
import { ENDPOINTS } from '@/api/endpoints';
import { logger } from '@/utils/logger';
import type {
  BannerImage,
  PaginatedResponse,
} from '@/types';

export const contentService = {
  async getHomeBanners(): Promise<PaginatedResponse<BannerImage> | null> {
    try {
      const res = await http.get<PaginatedResponse<BannerImage>>(ENDPOINTS.content);

      return res.data;
    } catch (error) {
      logger.error('Failed to fetch home banners', error);

      return null;
    }
  },
};
