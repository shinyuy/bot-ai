import { apiSlice } from '../services/apiSlice';


const statsApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    retrieveStats: builder.query({
      query: ({}) => ({
        url: `/stats`,
        method: 'GET',
      }),
    }),
  }),
});

export const { useRetrieveStatsQuery } = statsApiSlice;
