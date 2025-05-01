import axios from '@axios';

const requestUrl = '/v2/tables/mrj0v19g7j32pze/records';

export const contentService = {
  getHomePageBanners: async () => {
    try {
      const queryParams = {};

      const res = await axios.get(requestUrl, { params: queryParams });

      return res.data;
    } catch (error) {
      console.error('Error fetching home page banners:', error);

      return null;
    }
  },

  getNew: async (id: string) => {
    try {
      const res = await axios.get(`${requestUrl}/${id}`);

      return res;
    } catch (error) {
      console.error(`Error fetching new with id ${id}:`, error);

      return null;
    }
  },
};
