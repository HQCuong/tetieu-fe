import axios from '@axios';

const requestUrl = '/v2/tables/mqikq1gwr4brz82';

export const newServices = {
  getNews: async (params?: any) => {
    try {
      const res = await axios.get(`${requestUrl}/records?sort=CreatedAt`, params);

      return res;
    } catch (error) {
      console.error(error);

      return null;
    }
  },
};
