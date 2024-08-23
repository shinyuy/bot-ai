'use client';

import { useRetrieveUserQuery } from '../../../redux/features/authApiSlice';
import { List, Spinner } from '../../../components/common';
import CompanyForm from '../../../components/forms/CompanyForm';
import File from '../../../components/common/File'
import { useState } from 'react';
import HookMultiStepForm from "../../../components/forms/multi-step-form";

export default function Page() {
    const { data: user, isLoading, isFetching } = useRetrieveUserQuery();
    const [company, setCompany] = useState({

    })
    const [done, setDone] = useState(false)


    if (isLoading || isFetching) {
        return (
            <div className='flex justify-center my-8'>
                <Spinner lg />
            </div>
        );
    }

    const imagesHandler = (files) => {
        //setAppartment({ ...appartment, images });
    };

    return (
        <div>
            <div>
                <h1 className="text-center font-bold text-[24px] mb-[50px]">Create a Chatbot</h1>
                <HookMultiStepForm />
            </div>






            {/* <CompanyForm />
            <File
                imagesHandler={(images) => imagesHandler(images)}
                reset={false}
                company={company}
                setCompany={setCompany}
                setDone={setDone}
                files={[]}
            /> */}
        </div>
    );
}
