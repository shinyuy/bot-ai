import { apiSlice } from '../services/apiSlice';

interface Company {
  name: string;
  website: string;
}

const companyApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    retrieveCompany: builder.query<Company, void>({
      query: () => '/company',
    }),
    company: builder.mutation({
      query: ({ name, website }) => ({
        url: '/company',
        method: 'POST',
        body: { name, website },
      }),
    }),
    companies: builder.mutation({
      query: () => ({
        url: '/company',
        method: 'GET',
      }),
    }),
  }),
});

export const { useCompanyMutation, useCompaniesMutation } = companyApiSlice;
