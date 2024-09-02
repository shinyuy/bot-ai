import { apiSlice } from '../services/apiSlice';

interface Data_Store {
  name: string;
  website: string;
}

const datastoreApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    retrieveDataStores: builder.query({
      query: () => ({
        url: '/data_store/all',
        method: 'GET',
      }),
    }),
  }),
});

export const { useRetrieveDataStoresQuery } = datastoreApiSlice;
