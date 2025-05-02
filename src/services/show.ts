import axios from '@axios';

const requestUrl = '/v2/tables/mggu1r19xdmp1s3/records';

// Remove constant for items per page
// const DEFAULT_LIMIT = 5;

// Remove interface for page-based parameters or make page optional
interface GetShowsParams { // Renamed interface
  sort?: string; // Keep sort if needed
  where?: string; // Keep where if needed
  // Add other potential filter/sort parameters here if needed
}

export const showService = {
  // Update function signature to accept GetShowsParams
  getShows: async (params: GetShowsParams = {}) => { // Default params to empty object
    try {
      // Remove page, limit, offset calculation

      // Prepare query parameters for the API call
      const queryParams: Record<string, any> = {
        // Remove offset and limit
        sort: params.sort || '-CreatedAt', // Keep sorting or default
      };

      if (params.where) {
        queryParams.where = params.where;
      }

      // Pass the calculated queryParams object to axios config
      // NocoDB default limit might be 20, explicitly set a high limit if needed
      // queryParams.limit = 1000; // Example: Fetch up to 1000 records
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
