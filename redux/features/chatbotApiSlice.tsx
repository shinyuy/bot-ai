import { apiSlice } from '../services/apiSlice';

const chatbotApiSlice = apiSlice.injectEndpoints({
    endpoints: (builder) => ({
        addChatbot: builder.mutation({
            query: (chatbot) => {
                console.log(chatbot)
                return {
                    url: '/chatbot',
                    method: 'POST',
                    body: JSON.stringify({
                        ...chatbot
                    }),
                    headers: {
                        Accept: 'application/json',
                        'Content-Type': 'application/json',
                        //"content-Type": 'multipart/form-data; boundary=----WebKitFormBoundary7MA4YWxkTrZu0gW'
                        // 'Content-Type': 'application/x-www-form-urlencoded',
                    },
                };
            },
        }),
        retrieveChatbots: builder.query({
            query: () => ({
                url: '/chatbots',
                method: 'GET',
            }),
        }),
        retrieveChatbotDetails: builder.query({
            query: ({ data_source_id, company_id }) => {
                console.log(data_source_id)
                console.log(company_id)
                return ({
                    url: `/chatbots/details/?data_source_id=${data_source_id}&company_id=${company_id}`,
                    method: 'GET',
                })
            },
        }),
    }),

});

export const { useAddChatbotMutation, useRetrieveChatbotsQuery, useRetrieveChatbotDetailsQuery } = chatbotApiSlice;
