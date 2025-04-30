import axios from '@axios';

// Replace 'PERFORMANCE_TABLE_ID' with the actual NocoDB table ID for performances
const requestUrl = '/v2/tables/mvx3m1bzow5ac1l/records';

// Define constant for items per page
const DEFAULT_LIMIT = 5; // Or adjust if needed for performances

// Define an interface for page-based parameters
interface GetPerformancesPageParams {
  page?: number; // Page number (1-based)
  // Add other potential filter/sort parameters here if needed
}

export const performanceServices = {
  // Function to get a list of performances with pagination and sorting
  getPerformances: async (params: GetPerformancesPageParams = {}) => {
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
        sort: '-CreatedAt', // Sort by creation date, newest first (adjust column name if different)
        // Include other potential parameters from input if needed
      };

      // Pass the calculated queryParams object to axios config
      const res = await axios.get(requestUrl, { params: queryParams });

      // Return the actual data from the response
      return res;
    } catch (error) {
      console.error('Error fetching performances:', error);

      return null;
    }
  },

  // Function to get a single performance by its ID
  getPerformance: async (id: string) => {
    try {
      const res = await axios.get(`${requestUrl}/${id}`);

      return res;
    } catch (error) {
      console.error(`Error fetching performance with id ${id}:`, error);

      return null;
    }
  },
};
