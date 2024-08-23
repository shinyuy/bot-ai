import { Controller, useFormContext } from 'react-hook-form';

import { validateEmail } from '../../../utils';
import { StepperFormValues } from '../../types/hook-stepper';

import { DatePickerSingle } from './ui/date-picker-single';
import { FloatingLabelInput } from './ui/floating-input';
import data from '../../../utils/countries.json';

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from './ui/select';

const ApplicantInfo = () => {
  const {
    control,
    trigger,
    formState: { errors },
    register,
  } = useFormContext<StepperFormValues>();

  return (
    <div className="flex min-h-80 w-full flex-col items-center">
      <h4 className="stepper_step_heading my-8">Company Information</h4>
      <div className="stepper_step_container w-3/4">
        <FloatingLabelInput
          id="name"
          label="Name of company"
          {...register('name', { required: 'Required' })}
          error={errors.name?.message}
        />
        <FloatingLabelInput
          id="website"
          label="Company website"
          // type="website"
          {...register('website', {
            required: 'Required',
          })}
          error={errors.website?.message}
        />
        <FloatingLabelInput
          id="phone"
          label="Phone Number"
          type="tel"
          {...register('phone', { required: 'Required' })}
          error={errors.phone?.message}
        />
        {/* <FloatingLabelInput
          id="country"
          label="Country"
          type="tel"
          {...register("country", { required: "Required" })}
          error={errors.country?.message}
        /> */}

        <Controller
          name="country"
          rules={{ required: 'Required' }}
          control={control}
          render={({ field: { onChange, value, onBlur }, fieldState: { invalid, error } }) => (
            <div className="bg-white">
              <Select
                onValueChange={(value) => {
                  console.log(value);
                  onChange(value);
                  trigger(['name', 'website', 'phone']);
                }}
                value={value}
                onOpenChange={(value) => !value && onBlur()}
              >
                <SelectTrigger name="country" floatingLabel="Country">
                  <SelectValue className="text-black" placeholder="Select country" />
                </SelectTrigger>
                {invalid && (
                  <span className="text-destructive !mt-[5px] block text-[12px]">
                    {error?.message}
                  </span>
                )}
                <SelectContent>
                  {data.countries?.map((country, i) => (
                    <SelectItem key={i} value={country.name} className="text-black">
                      {country.name}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
          )}
        />
      </div>
    </div>
  );
};

export default ApplicantInfo;
