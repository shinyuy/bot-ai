import Link from 'next/link';
import type { Metadata } from 'next';
import { Navbar } from '../../components/common';
import Image from 'next/image';

export const metadata: Metadata = {
    title: 'Bot AI',
    description: 'Bot AI home page',
};

export default function Page() {
    return (
        <>
            <Navbar />
            <main className='bg-white text-black min-h-screen'>
                <h1>Pricing</h1>
            </main >
        </>

    );
}
