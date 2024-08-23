'use client';

import { useRetrieveUserQuery } from '../../../redux/features/authApiSlice';
import { List, Spinner } from '../../../components/common';
import CompanyForm from '../../../components/forms/CompanyForm';
import File from '../../../components/common/File';
import { useState } from 'react';
import HookMultiStepForm from '../../../components/forms/multi-step-form';

export default function Page() {
  const { data: user, isLoading, isFetching } = useRetrieveUserQuery();
  const [company, setCompany] = useState({});
  const [done, setDone] = useState(false);

  if (isLoading || isFetching) {
    return (
      <div className="my-8 flex justify-center">
        <Spinner lg />
      </div>
    );
  }

  const imagesHandler = (files) => {
    //setAppartment({ ...appartment, images });
  };

  return (
    <div>
      <div>
        <h1 className="mb-[50px] text-center text-[24px] font-bold">Create a Chatbot</h1>
        <HookMultiStepForm />
      </div>
    </div>
  );
}
