'use client';
// components/CheckoutButton.js
import { useState } from 'react';
import { loadStripe } from '@stripe/stripe-js';
import { useRetrieveUserQuery } from '../../redux/features/authApiSlice';
import { useCreateStripeSessionMutation } from '../../redux/features/stripeApiSlice';
import { toast } from 'react-toastify';
import { useRouter } from 'next/navigation';

const stripePromise = loadStripe(`pk_test_hOKUPTlPFPzr45HYhwaGSQvz00gGujdnqc`);

export default function CheckoutButton({ priceId, price, interval, name }) {
  const router = useRouter();
  const { data: user, isFetching } = useRetrieveUserQuery();
  const [
    createStripeSession,
    {
      /*isLoading*/
    },
  ] = useCreateStripeSessionMutation();
  const [loading, setLoading] = useState(false);

  const handleCheckout = async () => {
    setLoading(true);

    if (!user || user === undefined) {
      return router.push('/auth/login');
    }
    const stripe = await stripePromise;

    const res = await createStripeSession({ priceId, user, price, interval, name });
    if (res.data) {
      const { sessionId } = await res.data;

      const result = await stripe.redirectToCheckout({
        sessionId,
      });
    }
    const { error } = await stripe.redirectToCheckout({ sessionId });
    if (error) {
      console.error(error);
    }

    setLoading(false);
  };

  return (
    <button
      className="mt-16 rounded-full bg-black bg-sky-500 px-8 py-2 text-white transition duration-200 hover:bg-sky-600"
      onClick={handleCheckout}
      disabled={loading}
    >
      {loading ? 'Loading...' : 'Subscribe Now'}
    </button>
  );
}
