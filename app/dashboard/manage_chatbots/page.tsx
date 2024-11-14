"use client"
import React, { useState } from 'react';
import { FaEdit, FaEye, FaTrash, FaPlus } from 'react-icons/fa';
import StepperIndicator from '../../../components/forms/StepperIndicator';
import Chatbot from '../../../components/forms/ChatbotDetails';
import FileUpload from '../../../components/forms/DataSource';
import Success from '../../../components/forms/Success';
import { IoCloseOutline } from "react-icons/io5";
import { useRetrieveChatbotsQuery } from '../../../redux/features/chatbotApiSlice';
import ChabotDetails from '../../../components/common/ChatbotDetails';
import ChatbotAppearance from '../../../components/forms/ChatbotAppearance';
import { useAddChatbotMutation } from '../../../redux/features/chatbotApiSlice';
import { toast } from 'react-toastify';


function getStepContent(step: number, setActiveStep, chatbot, setChatbot, submit, cdn) {
    switch (step) {
        case 1:
            return <Chatbot setActiveStep={setActiveStep} chatbot={chatbot} setChatbot={setChatbot} />;
        case 2:
            return <FileUpload setActiveStep={setActiveStep} chatbot={chatbot} setChatbot={setChatbot} />;
        case 3:
            return <ChatbotAppearance setActiveStep={setActiveStep} chatbot={chatbot} setChatbot={setChatbot} submit={submit} />;
        case 4:
            return <Success cdn={cdn} />;
        default:
            return 'Unknown step';
    }
}

const ManageChatbots = () => {
    const [addChatbot, { /*isLoading*/ }] = useAddChatbotMutation();
    const [showModal, setShowModal] = useState(false);
    const [create, setCreate] = useState(false)
    const [activeStep, setActiveStep] = useState(1);
    const { data: chatbots, isFetching } = useRetrieveChatbotsQuery('');
    const [seeDetails, setSeeDetails] = useState(false)
    const [chatbot, setChatbot] = useState({
        name: "",
        logo: "",
        chatbot_public: true,
        nameOfDataSource: "",
        data: "",
        primaryColor: '#3498db',
        welcomeMessage: "",
        placeholderText: "",
        hideBranding: false,
        data_source: '',
    })
    const [isLoading, setIsLoading] = useState(false)
    const [cdn, setCdn] = useState("")

    const handleModalToggle = () => setShowModal(!showModal);

    const isStepValid = () => {
        if (activeStep === 1 && chatbot.name /*&& chatbot.logo */) return true;
        if (activeStep === 2 && chatbot.nameOfDataSource && chatbot.data) return true;
        if (activeStep === 3) return true;

        return false;
    };

    const handleNext = () => {
        if (isStepValid()) {
            setActiveStep(activeStep + 1);
        } else {
            alert("Please fill out the required fields");
        }
    };

    const submit = async (e) => {
        e.preventDefault()
        setIsLoading(true)
        await addChatbot({ ...chatbot, logo_url: chatbot.logo, primary_color: chatbot.primaryColor, data_source: chatbot.data_source })
            .unwrap()
            .then((data) => {
                //dispatch(setAuth());
                setCdn(data.chatbot_url)
                setIsLoading(false)
                toast.success('Chatbot created');
                setActiveStep(4)
            })
            .catch(() => {
                setIsLoading(false)
                toast.error('Failed to upload file');
            });
    }

    return (
        <div className=" min-h-screen p-4">
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
                            {getStepContent(activeStep, setActiveStep, chatbot, setChatbot, submit, cdn)}
                            <div className='flex justify-between mt-8 px-36'>
                                <button
                                    type="button"
                                    onClick={() => setActiveStep(activeStep - 1)}
                                    className="flex w-24 justify-center rounded-md bg-gray-800 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-gray-900 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                                    disabled={activeStep == 1}
                                >
                                    Previous
                                </button>
                                <button
                                    type="button"
                                    onClick={activeStep === 3 ? submit : handleNext}
                                    className="flex w-24 justify-center rounded-md bg-gray-800 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-gray-900 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                                    disabled={isLoading}
                                >
                                    {activeStep === 3 ? 'Submit' : 'Next'}
                                </button>
                            </div>
                        </>
                    </div>
                </div>}
        </div>
    );
};

export default ManageChatbots;
