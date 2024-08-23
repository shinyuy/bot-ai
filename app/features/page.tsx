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
      <main className="min-h-screen bg-white text-black">
        <h1>Features</h1>
      </main>
    </>
  );
}
