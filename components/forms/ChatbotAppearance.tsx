

import { useRetrieveDataStoresQuery } from '../../redux/features/datastoreApiSlice';
import { useState } from 'react';
import { useAddChatbotMutation } from '../../redux/features/chatbotApiSlice';
import ColorPicker from '../common/ColorPicker';
import { useFileUploadMutation } from '../../redux/features/fileApiSlice';


const ChatbotAppearance = ({ setActiveStep, chatbot, setChatbot, submit }: { setActiveStep, chatbot, setChatbot, submit }) => {
    const [addChatbot, { /*isLoading*/ }] = useAddChatbotMutation();
    const { data: datastores } = useRetrieveDataStoresQuery('');
    const [fileUpload, { /*isLoading*/ }] = useFileUploadMutation();
    const [fileState, setFileState] = useState({
        uploadedFiles: [],
        uploading: false,
        error: '',
        width: null,
        name: '',
        textContent: ''
    });


    return (
        <div className="flex min-h-80 w-full flex-col items-center">
            <h4 className="stepper_step_heading my-8">Chatbot Details</h4>
            <form onSubmit={submit} className="w-1/2">

                <div className='mb-8'>
                    <h1>Customize Your Chatbot</h1>
                    <p>Select your preferred color for the chatbot</p>
                    <div className='flex py-4'>
                        <ColorPicker onColorChange={(color) => setChatbot({ ...chatbot, primaryColor: color })} />

                        <div
                            style={{
                                backgroundColor: chatbot.primaryColor,
                                padding: '20px',
                                borderRadius: '5px',
                                margin: '20px',
                            }}
                        >
                            <h2 className='text-white'>Chatbot Preview</h2>
                            <p className='text-white'>This will be the main color of your chatbot!</p>
                        </div>
                    </div>

                </div>


                <div>
                    <label className='' htmlFor="welcomeMessage">Chatbot welcome message (optional)</label>
                    <textarea placeholder='Enter chatbot welcome message. Displayed once chatbot is opened' className="block mb-8 w-full border-gray-400 rounded-md border px-2 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                        id="welcomeMessage" onChange={(e) => setChatbot({ ...chatbot, welcomeMessage: e.target.value })} value={chatbot.welcomeMessage} required={true} name="welcomeMessage" >
                    </textarea>
                </div>
                <div>
                    <label className='' htmlFor="placeholderText">Chatbot placeholder text (optional)</label>
                    <textarea placeholder='Enter chatbot placeholder text. Displayed once chatbot is opened' className="block mb-8 w-full border-gray-400 rounded-md border px-2 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                        id="placeholderText" onChange={(e) => setChatbot({ ...chatbot, placeholderText: e.target.value })} value={chatbot.placeholderText} required={true} name="placeholderText" >
                    </textarea>
                </div>


                <div>
                    Hide Contexx AI logo on chatbot (requires Pro/Enterprise plan)<br />
                    <div className="toggle-switch mb-8">
                        <input
                            type="checkbox"
                            className="checkbox"
                            name={"hideBranding"}
                            id={"hideBranding"}
                            checked={chatbot.hideBranding}
                            onChange={(e) => setChatbot({ ...chatbot, hideBranding: !chatbot.hideBranding })}
                        />
                        <label className="label" htmlFor={"hideBranding"}>
                            <span className="inner" />
                            <span className="switch" />
                        </label>
                    </div>
                </div>
            </form>
        </div>
    );
};

export default ChatbotAppearance;