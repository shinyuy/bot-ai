import { apiSlice } from '../services/apiSlice';

const stripeApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    createStripeSession: builder.mutation({
      query: ({ priceId, user, price, interval, name }) => {
        return ({
        url: '/stripe/create-checkout-session',
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ priceId, user, price, interval, name }),
      })},
    }),
  }),
});

export const { useCreateStripeSessionMutation } = stripeApiSlice;
