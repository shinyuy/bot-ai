import { Controller, useFormContext } from 'react-hook-form';

import { validateEmail } from '../../../utils';
import { StepperFormValues } from '../../types/hook-stepper';

import { DatePickerSingle } from './ui/date-picker-single';
import { FloatingLabelInput } from './ui/floating-input';
import data from '../../../utils/countries.json';
import CheckBox from './ui/checkbox';

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from './ui/select';

const DataSource = () => {
  const {
    control,
    trigger,
    formState: { errors },
    register,
  } = useFormContext<StepperFormValues>();

  return (
    <div className="flex min-h-80 w-full flex-col items-center">
      <h4 className="stepper_step_heading my-8">Data Sources</h4>
      <p className="text-gray-500">
        Select the type of data sources your chatbot will be using to answer questions
      </p>
      <div className="stepper_step_container w-3/4">
        <CheckBox label="File/PDF " value="" />
        <CheckBox label="website" value="" />
        <CheckBox label="Database" value="" />
      </div>
    </div>
  );
};

export default DataSource;
