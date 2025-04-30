import axios from '@axios';

// Replace 'PERFORMANCE_TABLE_ID' with the actual NocoDB table ID for performances
const requestUrl = '/v2/tables/mvx3m1bzow5ac1l/records';

// Define an interface for parameters, including pagination, sorting, and filtering
export interface GetPerformancesPageParams { // Export the interface
  page?: number; // Page number (1-based)
  limit?: number; // Number of items per page
  sort?: string; // Sort field and direction (e.g., 'Date', '-CreatedAt')
  where?: string; // NocoDB style where clause (e.g., '(Date,ge,2023-10-27)')
  // Add other potential filter/sort parameters here if needed
}

export const performanceServices = {
  // Function to get a list of performances with pagination, sorting, and filtering
  getPerformances: async (params: GetPerformancesPageParams = {}) => {
    try {
      // Determine page number and limit from params
      const page = (params.page && params.page > 0) ? params.page : 1;
      const limit = params.limit; // Use limit from params if provided

      // Calculate offset only if limit is provided
      const offset = (limit && page > 1) ? (page - 1) * limit : 0;

      // Prepare query parameters for the API call using provided params
      const queryParams: Record<string, any> = { offset: offset };

      // Add parameters to queryParams only if they exist in the input params
      if (limit !== undefined) {
        queryParams.limit = limit;
      }

      if (params.sort) {
        queryParams.sort = params.sort;
      }

      if (params.where) {
        queryParams.where = params.where;
      }

      // Pass the calculated queryParams object to axios config
      const res = await axios.get(requestUrl, { params: queryParams });

      // Return the actual data from the response
      // Assuming the API response structure includes a 'list' property
      // Adjust based on your actual API response structure if needed
      return res; // Return res.data directly as assumed by the component
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
