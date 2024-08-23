import { Controller, useFormContext } from "react-hook-form";

import { StepperFormValues } from "../../types/hook-stepper";

import { DatePickerSingle } from "./ui/date-picker-single";
import { FloatingLabelInput } from "./ui/floating-input";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "./ui/select";

const Success = () => {
  const {
    control,
    formState: { errors },
    register,
  } = useFormContext<StepperFormValues>();

  return (
    <div className="flex flex-col w-full items-center min-h-80">
      <h4 className="stepper_step_heading my-8">Success</h4>
      <div className="w-3/4 flex flex-col">

        <span className="text-gray-500 text=sm">Copy the following link and script tags and add to the head of your main index.html file</span>

        <span className="border-2 rounded text-black w-full h-32 my-8">
          {`<link rel="stylesheet" href="https://bot-client-2b4.pages.dev/style.css" />`}<br />
          {`<link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@24,400,0,0" />`}<br />
          {`<script src="https://bot-client-2b4.pages.dev/script.js" defer></script>`}
        </span>

        <span className="text-gray-500 text=sm">Copy the following script tag and add just above the closing body tag of your index.html file</span>
        <span className="border-2 rounded text-black w-full h-32 my-8">
          {`<script src="https://bot-client-2b4.pages.dev/ui.js"></script>`}
        </span>
      </div>
    </div>
  );
};

export default Success;
