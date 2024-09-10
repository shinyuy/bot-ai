'use client';

import { FaEdit, FaTrash, FaPlus, FaBuilding } from 'react-icons/fa';
import { Spinner } from '../../../components/common';
import { useState, useEffect } from 'react';
import { useAddCompany } from '../../../hooks';
import StepperIndicator from '../../../components/forms/StepperIndicator';
import CompanyInfo from '../../../components/forms/CompanyInfo';
import FileUpload from '../../../components/forms/File';
import Success from '../../../components/forms/Success';
import { useRetrieveCompaniesQuery } from '../../../redux/features/companyApiSlice';
import { IoCloseOutline } from "react-icons/io5";

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
  const [company, setCompany] = useState({});
  const [done, setDone] = useState(false);
  const { name, website, isLoading, onChange, onSubmit } = useAddCompany();
  const [activeStep, setActiveStep] = useState(1);
  const [erroredInputName, setErroredInputName] = useState('');
  const [create, setCreate] = useState(false)
  const { data: companies, isFetching } = useRetrieveCompaniesQuery('');


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

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const imagesHandler = (files) => {
    //setAppartment({ ...appartment, images });
  };

  return (
    <div>
      {!create &&
        <div className="bg-gray-100 min-h-screen p-8">
          <h1 className="text-4xl font-bold text-gray-800">Manage Companies</h1>
          <p className="text-xl text-gray-600 mt-2">Easily manage chatbots for different companies or businesses.</p>

          <div className="mt-8 space-y-6">
            {/* Company List */}
            {companies?.map((company, i) => {
              return (
                <div className="bg-white shadow-lg rounded-lg p-6 flex justify-between items-center">
                  <div className="flex items-center space-x-4">
                    <FaBuilding className="text-gray-800 text-3xl" />
                    <div>
                      <h2 className="text-2xl font-bold text-gray-800">{company.name}</h2>
                      <p className="text-gray-600">Industry: IT & Software</p>
                      <p className="text-gray-600">Chatbots: 3</p>
                    </div>
                  </div>
                  <div className="flex space-x-4">
                    <button className="bg-white text-gray-800 py-2 px-4 rounded-lg hover:cursor-pointer flex items-center space-x-2">
                      <FaEdit className='text-gray-800' />
                    </button>
                    <button className="py-2 text-red-900 px-4 rounded-lg hover:cursor-pointer flex items-center space-x-2">
                      <FaTrash className='text-red-900' />
                    </button>
                  </div>
                </div>
              )
            })}



            {/* Add New Company Button */}
            <button
              className="bg-gray-800 text-white py-2 px-6 rounded-lg hover:bg-gray-900 flex items-center space-x-2"
              onClick={() => setCreate(!create)}
            >
              <FaPlus />
              <span>Add New Company</span>
            </button>

            {/* Modal for Adding New Company */}

          </div>
        </div>

      }


      {create &&
        <div>
          <h1 className="mb-[50px] text-center text-[24px] font-bold">Create a Chatbot</h1>
          <IoCloseOutline className='text-4xl text-gray-900 cursor-pointer' onClick={() => setCreate(!create)} />
          <div>
            <StepperIndicator activeStep={activeStep} />

            <>
              {getStepContent(activeStep, setActiveStep)}
            </>
          </div>
        </div>}
    </div>
  );
}
