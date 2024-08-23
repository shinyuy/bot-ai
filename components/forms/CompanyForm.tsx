'use client';

import { useAddCompany } from '../../hooks';
import { Form } from '../forms';

export default function CompanyForm() {
  const { name, website, isLoading, onChange, onSubmit } = useAddCompany();

  const config = [
    {
      labelText: 'Company name',
      labelId: 'name',
      type: 'text',
      value: name,
      required: true,
    },
    {
      labelText: 'Website',
      labelId: 'website',
      type: 'text',
      value: website,
      required: true,
    },
  ];

  return (
    <Form
      config={config}
      isLoading={isLoading}
      btnText="Next"
      onChange={onChange}
      onSubmit={onSubmit}
    />
  );
}
