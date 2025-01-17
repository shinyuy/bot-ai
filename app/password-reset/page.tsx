import { PasswordResetForm } from '../../components/forms';
import type { Metadata } from 'next';
import { Navbar, Footer } from '../../components/common';

export const metadata: Metadata = {
  title: 'Contexx AI | Password Reset',
  description: '',
};

export default function Page() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen  bg-gray-100 text-black">
        <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
          <div className="sm:mx-auto sm:w-full sm:max-w-sm">
            <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-800">
              Reset your password
            </h2>
          </div>

          <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
            <PasswordResetForm />
          </div>
        </div>
      </main>

      <Footer />
    </>
  );
}
