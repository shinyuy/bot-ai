'use client';

import { useRouter } from 'next/navigation';

export default function Page(params) {
    const router = useRouter();

    return (
        <div className="min-h-screen flex flex-col justify-center items-center bg-red-50">
            <h1 className="text-4xl font-bold text-red-600">Subscription Canceled</h1>
            <p className="mt-4 text-lg text-red-700">
                You canceled the subscription process. Feel free to try again when you're ready.
            </p>
            <button
                className="mt-8 px-6 py-3 bg-red-500 text-white font-semibold rounded-md shadow-lg hover:bg-red-600 transition"
                onClick={() => router.push("/pricing")}
            >
                Go Back to Pricing
            </button>
        </div>
    );
};
