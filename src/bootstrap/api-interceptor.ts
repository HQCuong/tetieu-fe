import axios from 'axios';
import { APP_CONFIG } from '@/configs';

const instance = axios.create();

instance.defaults.baseURL = String(import.meta.env.VITE_API_URL);
instance.defaults.headers['xc-token'] = APP_CONFIG.token;
instance.interceptors.response.use(
  response => response,
  error => {
    if (error.response) {
      if (error.config.errorHandling) {
        const { message } = error.response.data;

        if (message && error.config.errorMessageHandling) {
          console.error(message);
        }
      }

      const response = {
        ...error.response.data,
        status_code: error.response.status,
      };

      return Promise.reject(response);
    }

    if (error.request) {
      console.error(error.request);
    } else {
      console.error('Error', error);
    }

    return Promise.reject(error);
  },
);

export default instance;
