'use client';

import { useRetrieveUserQuery } from '../../../redux/features/authApiSlice';
import { List, Spinner } from '../../../components/common';
import CompanyForm from '../../../components/forms/CompanyForm';
import File from '../../../components/common/File';
import { useState, useEffect } from 'react';
import HookMultiStepForm from '../../../components/forms/multi-step-form';
import { useAddCompany } from '../../../hooks';
import StepperIndicator from '../../../components/forms/multi-step-form/stepper-indicator';
import CompanyInfo from '../../../components/forms/multi-step-form/company-info';
import DataSource from '../../../components/forms/multi-step-form/data-source';
import FileUpload from '../../../components/forms/multi-step-form/file';
import Success from '../../../components/forms/multi-step-form/success';

function getStepContent(step: number, setActiveStep) {
    switch (step) {
        case 1:
            return <CompanyInfo />;
        case 2:
            return <DataSource />;
        case 3:
            return <FileUpload />;
        case 4:
            return <Success />;
        case 5:
        default:
            return 'Unknown step';
    }
}

export default function Page() {
    // const { data: user, isLoading, isFetching } = useRetrieveUserQuery();
    const [company, setCompany] = useState({});
    const [done, setDone] = useState(false);
    const { name, website, isLoading, onChange, onSubmit } = useAddCompany();
    const [activeStep, setActiveStep] = useState(3);
    const [erroredInputName, setErroredInputName] = useState('');
    // const methods = useForm<StepperFormValues>({
    //   mode: 'onTouched',
    // });

    // const {
    //   trigger,
    //   handleSubmit,
    //   setError,
    //   formState: { isSubmitting, errors },
    // } = methods;

    // focus errored input on submit
    useEffect(() => {
        const erroredInputElement = document.getElementsByName(erroredInputName)?.[0];
        if (erroredInputElement instanceof HTMLInputElement) {
            erroredInputElement.focus();
            setErroredInputName('');
        }
    }, [erroredInputName]);

    if (isLoading /*|| isFetching*/) {
        return (
            <div className="my-8 flex justify-center">
                <Spinner lg />
            </div>
        );
    }

    // const handleNext = async () => {
    //     // const isStepValid = await trigger(undefined, { shouldFocus: true });
    //     if (isStepValid) setActiveStep((prevActiveStep) => prevActiveStep + 1);
    // };

    const handleBack = () => {
        setActiveStep((prevActiveStep) => prevActiveStep - 1);
    };

    const imagesHandler = (files) => {
        //setAppartment({ ...appartment, images });
    };

    return (
        <div>
            <div>
                <h1 className="mb-[50px] text-center text-[24px] font-bold">Create a Chatbot</h1>
                <div>
                    <StepperIndicator activeStep={activeStep} />
                    {/* {errors.root?.formError && (
            <Alert variant="destructive" className="mt-[28px]">
              <ExclamationTriangleIcon className="h-4 w-4" />
              <AlertTitle>Form Error</AlertTitle>
              <AlertDescription>{errors.root?.formError?.message}</AlertDescription>
            </Alert>
          )} */}
                    <>
                        {getStepContent(activeStep, setActiveStep)}
                        {/* <div className="flex w-3/4 justify-between space-x-[20px]">
              <Button
                type="button"
                className="w-[100px] bg-black text-white"
                variant="secondary"
                onClick={handleBack}
                disabled={activeStep === 1}
              >
                Back
              </Button>
              {activeStep === 3 || activeStep === 1 ? (
                <Button
                  className="w-[100px]"
                  // type="button"
                  type="submit"
                  // onClick={handleSubmit(submitForm)}
                  disabled={isSubmitting}
                >
                  Submit
                </Button>
              ) : (
                <Button type="button" className="w-[100px]" onClick={handleNext}>
                  Next
                </Button>
              )}
            </div> */}
                    </>
                </div>
            </div>
        </div>
    );
}
