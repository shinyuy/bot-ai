import { Controller, useFormContext } from 'react-hook-form';

import { StepperFormValues } from '../../types/hook-stepper';

import { FloatingLabelInput } from './ui/floating-input';
import data from '../../../utils/countries.json';
import { useAddCompany } from '../../../hooks';
import { Form } from '../../forms';

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from './ui/select';

const CompanyInfo = () => {
  const { name, website, phone, country, isLoading, onChange, onSubmit } = useAddCompany();
  // const {
  //   control,
  //   trigger,
  //   formState: { errors },
  //   register,
  // } = useFormContext<StepperFormValues>();

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
    {
      labelText: 'Phone number',
      labelId: 'phone',
      type: 'text',
      value: phone,
      required: true,
    },
    {
      labelText: 'Country',
      labelId: 'country',
      type: 'text',
      value: country,
      required: true,
    },

  ];


  return (
    <div className="flex min-h-80 w-full flex-col items-center">
      <h4 className="stepper_step_heading my-8">Company Information</h4>
      <div className="w-1/2">
        <Form
          config={config}
          isLoading={isLoading}
          btnText="Submit & Continue"
          onChange={onChange}
          onSubmit={onSubmit}
        />
      </div>
    </div>
  );
};

export default CompanyInfo;
