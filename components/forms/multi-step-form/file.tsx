import { useFormContext } from 'react-hook-form';
import { useState } from 'react';

import { validateEmail } from '../../../utils';
import { StepperFormValues } from '../../types/hook-stepper';
import File from '../../common/File';


const FileUpload = () => {
  // const {
  //   control,
  //   trigger,
  //   formState: { errors },
  //   register,
  // } = useFormContext<StepperFormValues>();

  const [company, setCompany] = useState({});
  const [done, setDone] = useState(false);

  const imagesHandler = (files) => {
    //setAppartment({ ...appartment, images });
  };

  return (
    <div className="flex min-h-80 w-full flex-col items-center">
      <h4 className="stepper_step_heading my-8">File Upload</h4>
      <div className="mb-8 w-1/2">
        <File
          imagesHandler={(images) => imagesHandler(images)}
          reset={false}
          company={company}
          setCompany={setCompany}
          setDone={setDone}
          files={[]}
        />
      </div>
    </div>
  );
};

export default FileUpload;
