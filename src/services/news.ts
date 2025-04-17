import axios from '@axios';

const requestUrl = '/v2/tables/mqikq1gwr4brz82/records';

export const newServices = {
  getNews: async (params?: any) => {
    try {
      const res = await axios.get(requestUrl, params);

      return res;
    } catch (error) {
      console.error(error);

      return null;
    }
  },

  getNew: async (id: string) => {
    try {
      const res = await axios.get(`${requestUrl}/${id}`);

      return res;
    } catch (error) {
      console.error(error);

      return null;
    }
  },
};
