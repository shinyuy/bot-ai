'use client';

import { useSocialAuthenticateMutation } from '../../../redux/features/authApiSlice';
import { useSocialAuth } from '../../../hooks';
import { Spinner } from '../../../components/common';
import { Suspense } from 'react';

export default function Page() {
  const [facebookAuthenticate] = useSocialAuthenticateMutation();
  useSocialAuth(facebookAuthenticate, 'facebook');

  return (
    <Suspense
      fallback={
        <div className="my-8">
          <Spinner lg />
        </div>
      }
    ></Suspense>
  );
}
