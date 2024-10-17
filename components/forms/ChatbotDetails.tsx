import { useRetrieveDataStoresQuery } from '../../redux/features/datastoreApiSlice';
import { useState } from 'react';
import { useAddChatbotMutation } from '../../redux/features/chatbotApiSlice';
import { toast } from 'react-toastify';
import File from '../common/File';
import { useFileUploadMutation } from '../../redux/features/fileApiSlice';


const Chatbot = ({ setActiveStep, chatbot, setChatbot }: { setActiveStep, chatbot, setChatbot }) => {
    const [addChatbot, { /*isLoading*/ }] = useAddChatbotMutation();
    const { data: datastores } = useRetrieveDataStoresQuery('');
    const [fileUpload, { /*isLoading*/ }] = useFileUploadMutation();
    const [primaryColor, setPrimaryColor] = useState('#3498db');
    const [fileState, setFileState] = useState({
        uploadedFiles: [],
        uploading: false,
        error: '',
        width: null,
        name: '',
        textContent: ''
    });


    const onDrop = async (files) => {

        if (files[0].size > 5000) {
            setFileState({ ...fileState, error: 'Image size must not exceed 5000 MB' });
        } else {
            setFileState({ ...fileState, error: '', uploading: true });

            let formData = new FormData();

            formData.append('file', files[0]);

            await fileUpload({ formData })
                .unwrap()
                .then((data) => {
                    toast.success('File upload');
                    setFileState(
                        {
                            ...fileState,
                            uploading: false,
                            uploadedFiles: [data],
                            name: data.logo
                        })
                    setChatbot({ ...chatbot, logo: data.logo })
                    imagesHandler(fileState.uploadedFiles);
                })
                .catch(() => {
                    toast.error('Failed to upload file');
                });
        }
    };

    const imagesHandler = (files) => {
    };


    return (
        <div className="flex min-h-80 w-full flex-col items-center">
            <h4 className="stepper_step_heading my-8">Chatbot Details</h4>
            <div className="w-1/2">

                <div>
                    <label className='' htmlFor="name">Chatbot name</label>
                    <input
                        className="block mb-8 w-full border-gray-400 rounded-md border px-2 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                        placeholder='Enter chatbot name. This will be name visible on chatbot header'
                        type={"text"}
                        onChange={(e) => setChatbot({ ...chatbot, name: e.target.value })}
                        value={chatbot.name}
                        required={true}
                    />
                </div>


                <div className="mb-8 w-64">
                    <label className='' htmlFor="company">Your business logo/avatar</label>
                    {fileState.error && <p className='text-red-900'>{fileState.error}</p>}
                    <File
                        imagesHandler={(images) => imagesHandler(images)}
                        reset={false}
                        company={'company'}
                        setCompany={'setCompany'}
                        setDone={'setDone'}
                        files={[]}


                        onDrop={onDrop}
                        fileState={fileState}
                        setFileState={setFileState}
                    />
                </div>

                <div>
                    Chatbot Public (chatbot will be publicly available on your website)<br />
                    <div className="toggle-switch mb-8">
                        <input
                            type="checkbox"
                            className="checkbox"
                            name={"chatbot_public"}
                            id={"chatbot_public"}
                            //value={chatbot.chatbot_public}
                            checked={chatbot.chatbot_public}
                            onChange={(e) => setChatbot({ ...chatbot, chatbot_public: !chatbot.chatbot_public })}
                        />
                        <label className="label" htmlFor={"chatbot_public"}>
                            <span className="inner" />
                            <span className="switch" />
                        </label>
                    </div>
                </div>


                {/* <div>
                    <button
                        type="submit"
                        onClick={submit}
                        className="flex w-full justify-center rounded-md bg-gray-800 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-gray-900 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                        disabled={chatbot.loading}
                    >
                        {chatbot.loading ? <Spinner sm /> : `Create Chatbot`}
                    </button>
                </div> */}
            </div>
        </div>
    );
};

export default Chatbot;