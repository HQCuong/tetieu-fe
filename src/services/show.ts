import axios from '@axios';

const requestUrl = '/v2/tables/mggu1r19xdmp1s3/records';

// Define constant for items per page
const DEFAULT_LIMIT = 5;

// Define an interface for page-based parameters
interface GetShowsPageParams {
  page?: number; // Page number (1-based)
  // Add other potential filter/sort parameters here if needed
}

export const showService = {
  // Update function signature to accept GetShowsPageParams
  getShows: async (params: GetShowsPageParams = {}) => { // Default params to empty object
    try {
      // Determine page number (default to 1 if not provided or invalid)
      const page = (params.page && params.page > 0) ? params.page : 1;

      // Calculate limit and offset
      const limit = DEFAULT_LIMIT;
      const offset = (page - 1) * limit; // Calculate offset from 1-based page

      // Prepare query parameters for the API call
      const queryParams = {
        offset: offset,
        limit: limit,
        sort: '-CreatedAt', // Add sorting parameter for newest first
        // Include other potential parameters from input if needed
        // Example: ...params (if params could contain other valid API params)
      };

      // Pass the calculated queryParams object to axios config
      const res = await axios.get(requestUrl, { params: queryParams });

      // Return the actual data from the response
      return res.data;
    } catch (error) {
      console.error('Error fetching shows:', error);

      return null;
    }
  },

  getShow: async (id: string) => {
    try {
      const res = await axios.get(`${requestUrl}/${id}`);

      return res.data; // Ensure this returns res.data
    } catch (error) {
      console.error(`Error fetching show with id ${id}:`, error);

      return null;
    }
  },
};
