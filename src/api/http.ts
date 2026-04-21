import axios, { AxiosError, type AxiosInstance } from 'axios';
import { APP_CONFIG } from '@/constants';
import { logger } from '@/utils/logger';

// Central axios instance — all API calls go through this so we can attach
// auth headers, base URL and error handling in a single place.
export const http: AxiosInstance = axios.create({
  baseURL: APP_CONFIG.apiUrl,
  headers: {
    'xc-token': APP_CONFIG.apiToken,
  },
});

http.interceptors.response.use(
  response => response,
  (error: AxiosError) => {
    if (error.response) {
      logger.error('API response error', {
        url: error.config?.url,
        status: error.response.status,
        data: error.response.data,
      });

      return Promise.reject({
        ...(error.response.data as object),
        status_code: error.response.status,
      });
    }

    if (error.request) {
      logger.error('API no response', error.request);
    } else {
      logger.error('API setup error', error.message);
    }

    return Promise.reject(error);
  },
);

export default http;
