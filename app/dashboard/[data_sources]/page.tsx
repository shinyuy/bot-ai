'use client';

import { Spinner } from '../../../components/common';
import { useState, useEffect } from 'react';
import { useAddCompany } from '../../../hooks';
import StepperIndicator from '../../../components/forms/multi-step-form/stepper-indicator';
import CompanyInfo from '../../../components/forms/multi-step-form/company-info';
import FileUpload from '../../../components/forms/multi-step-form/file';
import Success from '../../../components/forms/multi-step-form/success';
import { useRetrieveDataStoresQuery } from '../../../redux/features/datastoreApiSlice';

function getStepContent(step: number, setActiveStep) {
    switch (step) {
        case 1:
            return <CompanyInfo />;
        case 2:
            return <FileUpload setActiveStep={setActiveStep} />;
        case 3:
            return <Success />;
        case 4:
        default:
            return 'Unknown step';
    }
}

export default function Page() {
    // const { data: user, isLoading, isFetching } = useRetrieveUserQuery();
    const { data: datastores, isFetching } = useRetrieveDataStoresQuery('');
    const [company, setCompany] = useState({});
    const [done, setDone] = useState(false);
    const { name, website, isLoading, onChange, onSubmit } = useAddCompany();
    const [activeStep, setActiveStep] = useState(3);
    const [erroredInputName, setErroredInputName] = useState('');

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
                    <>
                        {getStepContent(activeStep, setActiveStep)}
                    </>
                </div>
                {datastores?.map((d, i) => {
                    return (
                        <p key={i}>{d.name}</p>
                    )
                })}
            </div>
        </div>
    );
}
