"use client"
import React, { useState } from 'react';
import { FaEdit, FaEye, FaTrash, FaPlus } from 'react-icons/fa';
import StepperIndicator from '../../../components/forms/StepperIndicator';
import CompanyInfo from '../../../components/forms/CompanyInfo';
import Chatbot from '../../../components/forms/Chatbot';
import FileUpload from '../../../components/forms/File';
import Success from '../../../components/forms/Success';
import { IoCloseOutline } from "react-icons/io5";
import { useRetrieveChatbotsQuery } from '../../../redux/features/chatbotApiSlice';
import ChabotDetails from '../../../components/common/ChatbotDetails';

function getStepContent(step: number, setActiveStep) {
    switch (step) {
        case 1:
            return <CompanyInfo />;
        case 2:
            return <FileUpload setActiveStep={setActiveStep} />;
        case 3:
            return <Chatbot setActiveStep={setActiveStep} />;
        case 4:
            return <Success />;
        case 5:
        default:
            return 'Unknown step';
    }
}

const ManageChatbots = () => {
    const [showModal, setShowModal] = useState(false);
    const [create, setCreate] = useState(false)
    const [activeStep, setActiveStep] = useState(3);
    const { data: chatbots, isFetching } = useRetrieveChatbotsQuery('');
    const [seeDetails, setSeeDetails] = useState(false)

    const handleModalToggle = () => setShowModal(!showModal);

    return (
        <div className="bg-gray-100 min-h-screen p-8">
            {!create && <> <h1 className="text-4xl font-bold text-gray-800">Manage Your Chatbots</h1>
                <p className="text-xl text-gray-600 mt-2">Create, edit, or delete your chatbots with ease.</p></>}

            {!create &&
                <div className="mt-8 space-y-6">
                    {chatbots?.map((chat, i) => {
                        return (
                            <div className='bg-white shadow-lg rounded-lg p-6'>
                                <div className="flex justify-between items-center">
                                    <div>
                                        <h2 className="text-2xl font-bold text-gray-800">{chat.name}</h2>
                                        <p className="text-gray-600">Website: {chat.website}</p>
                                    </div>
                                    <div className="flex space-x-4">
                                        <button className=" text-white py-2 px-4 rounded-lg flex items-center space-x-2">
                                            <FaEdit className='text-black' />
                                            <span>Edit</span>
                                        </button>
                                        <button className="text-white py-2 px-4 rounded-lg flex items-center space-x-2">
                                            <FaTrash className='text-red-900' />
                                            <span>Delete</span>
                                        </button>
                                        <button onClick={() => setSeeDetails(!seeDetails)} className="text-white py-2 px-4 rounded-lg flex items-center space-x-2">
                                            <FaEye className='text-black' />
                                            <span>Details</span>
                                        </button>
                                    </div>
                                </div>
                                {seeDetails &&
                                    <ChabotDetails data_source_id={chat.data_sources} company_id={chat.company_id} />}
                            </div>
                        )
                    })}


                    {/* Add Chatbot Button */}
                    <button
                        className="bg-gray-800 text-white py-2 px-6 rounded-lg hover:bg-gray-900 flex items-center space-x-2"
                        onClick={() => setCreate(!create)}
                    >
                        <FaPlus />
                        <span>Add New Chatbot</span>
                    </button>

                </div>}


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
};

export default ManageChatbots;
