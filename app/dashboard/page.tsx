'use client';

import { useRetrieveUserQuery } from '../../redux/features/authApiSlice';
import { List, Spinner } from '../../components/common';
import { useEffect } from 'react';
import { useCompaniesMutation } from '../../redux/features/companyApiSlice';

export default function Page() {
  const { data: user, isLoading, isFetching } = useRetrieveUserQuery();
  const [companies, {}] = useCompaniesMutation();

  useEffect(() => {
    companies({})
      .unwrap()
      .then(({ d }) => {
        console.log(d);
        // dispatch(setAuth());
        // toast.success("File upload");
      })
      .catch(() => {
        // toast.error("Failed to upload file");
      });
  }, []);

  if (isLoading || isFetching) {
    return (
      <div className="my-8 flex justify-center">
        <Spinner lg />
      </div>
    );
  }

  return (
    <section>
      <div>
        <button className="rounded bg-black px-8 py-4 text-white">Create a Chatbot</button>
        <h2 className="text-black">Your Companies</h2>
        <p></p>
      </div>
    </section>
  );
}
