
import data from '../../utils/countries.json';
import { useAddCompany } from '../../hooks';
import { Form } from '../forms';
import { useRetrieveCompaniesQuery } from '../../redux/features/companyApiSlice';
import { useRetrieveDataStoresQuery } from '../../redux/features/datastoreApiSlice';
import { useState } from 'react';
import { Spinner } from '../common';
import { useAddChatbotMutation } from '../../redux/features/chatbotApiSlice';
import { toast } from 'react-toastify';
import ColorPicker from '../common/ColorPicker';

const Chatbot = ({ setActiveStep }: { setActiveStep }) => {
    const [addChatbot, { /*isLoading*/ }] = useAddChatbotMutation();
    // const { name, company, data_source, chatbot_public, isLoading, onChange, onSubmit } = useAddCompany();
    const { data: companies, isFetching } = useRetrieveCompaniesQuery('');
    const { data: datastores } = useRetrieveDataStoresQuery('');
    const [chatbot, setChatbot] = useState({
        name: "",
        company: "",
        data_source: null,
        chatbot_public: true,
        loading: false
    })


    const submit = async (e) => {
        e.preventDefault()
        await addChatbot({ ...chatbot, data_source: chatbot.data_source === null ? datastores[0].id : chatbot.data_source, company: chatbot.company === '' ? companies[0].id : chatbot.company })
            .unwrap()
            .then(() => {
                //dispatch(setAuth());
                toast.success('Chatbot created');
                setActiveStep(4)
            })
            .catch(() => {
                toast.error('Failed to upload file');
            });
    }

    const [primaryColor, setPrimaryColor] = useState('#3498db');

    const handleColorChange = (newColor) => {
        setPrimaryColor(newColor);
        // You can send this color to your server or update a chatbot preview
        // For example, store it in a database to apply to the chatbot UI
    };

    return (
        <div className="flex min-h-80 w-full flex-col items-center">
            <h4 className="stepper_step_heading my-8">Chatbot Details</h4>
            <form onSubmit={submit} className="w-1/2">

                <div>
                    <label className='' htmlFor="company">Chatbot name</label>
                    <input
                        className="block mb-8 w-full border-gray-400 rounded-md border px-2 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"

                        type={"text"}
                        onChange={(e) => setChatbot({ ...chatbot, name: e.target.value })}
                        value={chatbot.name}
                        required={true}
                    />
                </div>

                <div>
                    <label className='block text-sm font-medium leading-6 text-gray-800' htmlFor="industry">Company associated with chatbot</label>

                    <select onChange={e => setChatbot({ ...chatbot, company: e.target.value })} /*value={chatbot?.company}*/ className="block w-full mb-8 rounded-md border-0 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                        name="industry" id="industry">
                        {/* <option value="">Select industry</option> */}
                        {companies?.map((company, i) =>
                            <option key={i} value={company.id}>{company.name}</option>
                        )}
                    </select> </div>

                <div>
                    <label className='block text-sm font-medium leading-6 text-gray-800' htmlFor="industry">Data Source associated with chatbot</label>

                    <select onChange={e => setChatbot({ ...chatbot, data_source: e.target.value })} /*value={chatbot.data_source}*/ className="block w-full mb-8 rounded-md border-0 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                        name="industry" id="industry">
                        {/* <option value="">Select industry</option> */}
                        {datastores?.map((data_store, i) =>
                            <option key={i} value={data_store.id}>{data_store.name}</option>
                        )}
                    </select> </div>

                {/* <div>
                    {"Chabot Public"}{" "}<br />
                    <div className="toggle-switch mb-8">
                        <input
                            type="checkbox"
                            className="checkbox"
                            name={"chatbot_public"}
                            id={"chatbot_public"}
                            //value={chatbot.chatbot_public}
                            onChange={(e) => setChatbot({ ...chatbot, chatbot_public: !chatbot.chatbot_public })}
                        />
                        <label className="label" htmlFor={"chatbot_public"}>
                            <span className="inner" />
                            <span className="switch" />
                        </label>
                    </div>
                </div> */}

                <div>
                    <h1>Customize Your Chatbot</h1>
                    <p>Select your preferred color for the chatbot</p>
                    <div className='flex py-4'>
                        <ColorPicker onColorChange={handleColorChange} />

                        {/* Chatbot preview area */}
                        <div
                            style={{
                                backgroundColor: primaryColor,
                                padding: '20px',
                                borderRadius: '5px',
                                margin: '20px',
                            }}
                        >
                            <h2 className='text-white'>Chatbot Preview</h2>
                            <p className='text-white'>This will be the main color or your chatbot!</p>
                        </div>
                    </div>

                </div>

                <div>
                    <button
                        type="submit"
                        onClick={submit}
                        className="flex w-full justify-center rounded-md bg-gray-800 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-gray-900 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                        disabled={chatbot.loading}
                    >
                        {chatbot.loading ? <Spinner sm /> : `Create Chatbot`}
                    </button>
                </div>
            </form>
        </div>
    );
};

export default Chatbot;