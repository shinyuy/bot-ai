'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { toast } from 'react-toastify';
import { useSearchParams } from 'next/navigation'
import { Footer, Navbar } from '../../components/common';


export default function Page() {
    const router = useRouter();
    const searchParams = useSearchParams()
    const session_id = searchParams.get('session_id')

    useEffect(() => {
        if (session_id) {
            // You can make an API call to your backend to confirm the subscription status using session_id
            console.log("Stripe session ID:", session_id);
        }
    }, [session_id]);

    return (
        <>
            <Navbar />
            <div className="min-h-screen flex flex-col justify-center items-center bg-green-50">
                <h1 className="text-4xl font-bold text-green-600">Success!</h1>
                <p className="mt-4 text-lg text-green-700">
                    Your subscription was successful. Thank you for choosing our service!
                </p>
                <button
                    className="mt-8 px-6 py-3 bg-green-500 text-white font-semibold rounded-md shadow-lg hover:bg-green-600 transition"
                    onClick={() => router.push("/dashboard")}
                >
                    Go to Dashboard
                </button>
            </div>
            <Footer />
        </>
    );
};
