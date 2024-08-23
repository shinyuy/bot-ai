'use client';

import { redirect } from 'next/navigation';
import { useAppSelector } from '../../redux/hooks';
import { Spinner } from '../../components/common';

interface Props {
  children: React.ReactNode;
}

export default function RequireAuth({ children }: Props) {
  const { isLoading, isAuthenticated } = useAppSelector((state) => state.auth);

  if (isLoading) {
    return (
      <div className="my-8 flex justify-center">
        <Spinner lg />
      </div>
    );
  }

  if (!isAuthenticated) {
    redirect('/auth/login');
  }

  return <>{children}</>;
}
