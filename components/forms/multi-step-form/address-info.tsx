import { useFormContext } from "react-hook-form";

import { StepperFormValues } from "../../types/hook-stepper";

import { FloatingLabelInput } from "./ui/floating-input";

const AddressInfo = () => {
  const {
    formState: { errors },
    register,
  } = useFormContext<StepperFormValues>();

  return (
    <div className="flex flex-col w-full items-center min-h-80">
      <h4 className="stepper_step_heading my-8">Data Source</h4>
      <div className="stepper_step_container w-3/4">
        <FloatingLabelInput
          id="currentAddress"
          label="Current Address"
          type="text"
          {...register("address", { required: "Required" })}
          error={errors.address?.message}
        />
        <FloatingLabelInput
          id="city"
          label="City"
          type="text"
          {...register("city", { required: "Required" })}
          error={errors.city?.message}
        />
        <FloatingLabelInput
          id="state"
          label="State"
          type="text"
          {...register("state", { required: "Required" })}
          error={errors.state?.message}
        />
        <FloatingLabelInput
          id="zipCode"
          label="Zip Code"
          type="number"
          {...register("zipCode", { required: "Required" })}
          error={errors.zipCode?.message}
        />
      </div>
    </div>
  );
};

export default AddressInfo;
