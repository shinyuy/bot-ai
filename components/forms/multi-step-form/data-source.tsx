import { useState } from 'react';

import { StepperFormValues } from '../../types/hook-stepper';

import CheckBox from './ui/checkbox';


const DataSource = () => {
  const [checked, setChecked] = useState("");

  return (
    <div className="flex min-h-80 w-full flex-col items-center">
      <h4 className="stepper_step_heading my-8">Data Sources</h4>
      <p className="text-gray-500">
        Select the type of data sources your chatbot will be using to answer questions
      </p>
      <div className="stepper_step_container w-3/4">
        <CheckBox label="File/PDF " value="File/PDF" checked={checked} setChecked={setChecked} />
        <CheckBox label="Website" value="Website" checked={checked} setChecked={setChecked} />
        <CheckBox label="Database" value="Database" checked={checked} setChecked={setChecked} />
      </div>
    </div>
  );
};

export default DataSource;
