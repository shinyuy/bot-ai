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
      query: ({ name, website, phone, country }) => {
        console.log(name, website, phone, country)
        return ({
        url: '/company',
        method: 'POST',
        body: { name, website, phone, country },
      })},
    }),
    retrieveCompanies: builder.query({
      query: () => ({
        url: '/company',
        method: 'GET',
      }),
    }),
  }),
});

export const { useCompanyMutation, useRetrieveCompaniesQuery } = companyApiSlice;
