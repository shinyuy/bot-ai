import { useFormContext } from 'react-hook-form';

import { StepperFormValues } from '../../types/hook-stepper';


const Success = () => {
  const {
    control,
    formState: { errors },
    register,
  } = useFormContext<StepperFormValues>();

  return (
    <div className="flex min-h-80 w-full flex-col items-center">
      <h4 className="stepper_step_heading my-8">Success</h4>
      <div className="flex w-3/4 flex-col">
        <span className="text=sm text-gray-500">
          Copy the following link and script tags and add to the head of your main index.html file
        </span>

        <span className="my-8 h-32 w-full rounded border-2 text-black">
          {`<link rel="stylesheet" href="https://bot-client-2b4.pages.dev/style.css" />`}
          <br />
          {`<link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@24,400,0,0" />`}
          <br />
          {`<script src="https://bot-client-2b4.pages.dev/script.js" defer></script>`}
        </span>

        <span className="text=sm text-gray-500">
          Copy the following script tag and add just above the closing body tag of your index.html
          file
        </span>
        <span className="my-8 h-32 w-full rounded border-2 text-black">
          {`<script src="https://bot-client-2b4.pages.dev/ui.js"></script>`}
        </span>
      </div>
    </div>
  );
};

export default Success;
