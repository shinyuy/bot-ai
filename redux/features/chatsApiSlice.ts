import { apiSlice } from '../services/apiSlice';

interface Company {
  name: string;
  website: string;
}

const chatsApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    retrieveChats: builder.query({
      query: ({company_id}) => ({
        url: `/chats/${company_id}`,
        method: 'GET',
      }),
    }),
  }),
});

export const { useRetrieveChatsQuery } = chatsApiSlice;
