
import { useState } from 'react';

import File from '../common/File';
import { Spinner } from '../common';
import { useFileMutation } from '../../redux/features/fileApiSlice';
import { useSearchParams } from 'next/navigation';
import pdfToText from 'react-pdftotext';
import { toast } from 'react-toastify';
// import { useAppDispatch } from '@/redux/hooks';
import { useRouter } from 'next/navigation';
import { Trash } from 'lucide-react';

const FileUpload = ({ setActiveStep, chatbot, setChatbot }: { setActiveStep, chatbot, setChatbot }) => {
    const router = useRouter();
    // const dispatch = useAppDispatch();
    const [file, { isLoading }] = useFileMutation();
    const searchParams = useSearchParams();
    const [website, setWebsite] = useState(searchParams.get('website'))
    const [checked, setChecked] = useState("File/PDF");
    const [websiteURL, setWebsiteURL] = useState("")
    const [dataSources, setDataSources] = useState([
        {
            id: 1,
            type: "File/PDF",
            value: "",
            done: false,
            uploadedFiles: [],
            uploading: false,
            error: '',
            width: null,
            name: '',
            textContent: '',
            pdf: false
        },
    ]);

    const [company, setCompany] = useState({});
    const [done, setDone] = useState(false);
    const [fileState, setFileState] = useState({
        uploadedFiles: [],
        uploading: false,
        error: '',
        width: null,
        name: '',
        textContent: '',
        pdf: false
    });

    const ext = (f) => f.split('.').pop();

    const extractText = async (f) => {
        let content = await pdfToText(f);

        return content;
    };

    const onDrop = async (files, id) => {

        const pdf = files[0];

        if (pdf && ext(pdf.name) === 'pdf') {
            if (files[0].size > 5000000) {
                setFileState({ ...fileState, error: 'File size must not exceed 500000 MB' });
            } else {
                let formData = new FormData();

                formData.append('file', files[0]);
                const pdfText = await pdfToText(pdf);
                // setFileState({
                //     ...fileState, uploading: false,
                //     uploadedFiles: [{ logo: '/pdf.png' }], name: pdf.name, textContent: pdfText, pdf: true
                // })


                setDataSources((prevSources) =>
                    prevSources.map((source) =>
                        source.id === id ? {
                            ...source, ...fileState, uploading: false,
                            uploadedFiles: [{ logo: '/pdf.png' }], name: pdf.name, textContent: pdfText, pdf: true
                        } : source
                    )
                );

            }
        }
    }

    const handleSubmit = async (id, s) => {
        setDataSources((prevSources) =>
            prevSources.map((source) =>
                source.id === id ? { ...source, error: '', uploading: true } : source
            )
        );
        console.log(s)
        await file({ pdfText: s.textContent, name: s.name, website })
            .unwrap()
            .then((data) => {
                toast.success('File upload');
                setChatbot({ ...chatbot, nameOfDataSource: data.name, data: data.name, data_source: data.id })

                setDataSources((prevSources) =>
                    prevSources.map((source) =>
                        source.id === id ? { ...source, error: '', uploading: false, done: true } : source
                    )
                );

                // setActiveStep(3)
            })
            .catch((e) => {
                toast.error(`Failed to upload file ${e.data.error}`);
            });
    }

    const scrape = async (id, s) => {
        setDataSources((prevSources) =>
            prevSources.map((source) =>
                source.id === id ? { ...source, error: '', uploading: true } : source
            )
        );
        let res = await fetch(`https://r.jina.ai/${s.name}`, {
            method: 'GET',
            headers: {
                "Authorization": "Bearer jina_10568554771c46eca0d4caffc253fb66bMCO5AhkNkQpzHwfSkFOQJ-tChbA"
            },
        })
        let data = await res.text()
        console.log(data)

        await file({ pdfText: data, name: websiteURL, website })
            .unwrap()
            .then((data) => {
                toast.success('File upload');
                setChatbot({ ...chatbot, nameOfDataSource: data.name, data: data.name, data_source: data.id })
                // setActiveStep(3)
                setDataSources((prevSources) =>
                    prevSources.map((source) =>
                        source.id === id ? { ...source, error: '', uploading: false, done: true } : source
                    )
                );
            })
            .catch((e) => {
                toast.error(`Failed to upload data ${e.data.error}`);
            });

    }

    const imagesHandler = (files) => {
        // setCompany({...company})
    };






    // Handler for changing the input type or value
    const handleInputChange = (index, key, value) => {
        const updatedDataSources = [...dataSources];
        updatedDataSources[index][key] = value;
        setDataSources(updatedDataSources);
    };

    // Handler for adding a new input row
    const addDataSource = () => {
        setDataSources([...dataSources, {
            id: dataSources.length + 1,
            type: "File/PDF",
            value: "",
            done: false,
            uploadedFiles: [],
            uploading: false,
            error: '',
            width: null,
            name: '',
            textContent: '',
            pdf: false
        }]);
    };

    // Handler for removing a row
    const removeDataSource = (index) => {
        const updatedDataSources = dataSources.filter((_, i) => i !== index);
        setDataSources(updatedDataSources);
    };





    return (
        <div className="flex min-h-80 w-full flex-col items-center">
            <h4 className="stepper_step_heading my-8">Data Source</h4>
            <div className="w-3/4">
                {/* <div className='my-16'>
                    <p className="mb-8">
                        Select the type of data sources your chatbot will be using to answer questions
                    </p>
                    <div className="flex justify-between w-full">
                        <label>
                            <input
                                type="checkbox"
                                checked={checked === "File/PDF"}
                                onChange={() => setChecked("File/PDF")}
                            />{' '}
                            File/PDF
                        </label>
                        <br />
                        <label>
                            <input
                                type="checkbox"
                                checked={checked === "Website"}
                                onChange={() => setChecked("Website")}
                            />{' '}
                            Website
                        </label>
                        <br />
                        <label>
                            <input
                                type="checkbox"
                                checked={checked === "Database"}
                                onChange={() => setChecked("Database")}
                            />{' '}
                            Database
                        </label>
                    </div>
                </div> */}
                {/* 
                {checked === "File/PDF" &&
                    <>
                        <p className="mb-4">
                            Add data source
                        </p>
                        {fileState.error && <p className='text-red-900'>{fileState.error}</p>}
                        <div className="mb-8 w-full">
                            <File
                                imagesHandler={(images) => imagesHandler(images)}
                                reset={false}
                                company={company}
                                setCompany={setCompany}
                                setDone={setDone}
                                files={[]}


                                onDrop={onDrop}
                                fileState={fileState}
                                setFileState={setFileState}
                            />
                        </div>
                        {fileState.textContent && <div>
                            <button
                                type="button"
                                onClick={handleSubmit}
                                className="flex w-full justify-center rounded-md bg-gray-800 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-gray-900 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gray-900"
                                disabled={isLoading}
                            >
                                {isLoading || fileState.uploading ? <Spinner sm /> : `Upload`}
                            </button>
                        </div>}
                    </>}

                {
                    checked === "Website" && <>
                        <div>
                            <label className='' htmlFor="company">Webpage URL you want to scrape data from with https</label>
                            <input
                                className="block mb-16 w-full border-gray-400 rounded-md border px-2 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"

                                type={"text"}
                                onChange={(e) => setWebsiteURL(e.target.value)}
                                value={websiteURL}
                                required={true}
                            />
                        </div>
                        <div>
                            <button
                                type="button"
                                onClick={scrape}
                                className="flex w-full justify-center rounded-md bg-gray-800 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-gray-900 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gray-900"
                                disabled={isLoading}
                            >
                                {isLoading || fileState.uploading ? <Spinner sm /> : `Scrape`}
                            </button>
                        </div>
                    </>
                } */}































                <div>
                    {dataSources.map((source, index) => (
                        source.done ? <p>{source.name}     ......................done ✅</p> : <div className='flex space-x-8 items-center'>
                            <div
                                key={index}
                                className="flex flex-col mb-4 bg-gray-50 p-4 rounded shadow w-full"
                            >
                                {/* Type Selector */}
                                {/* <select
                                value={source.type}
                                onChange={(e) => handleInputChange(index, "type", e.target.value)}
                                className="border border-gray-300 rounded px-3 py-2 w-1/4"
                            >
                                <option value="url">Website URL</option>
                                <option value="pdf">PDF</option>
                                <option value="database">Database</option>
                            </select> */}

                                {/* Input Field */}
                                <div>
                                    <p className="mb-2">
                                        Select the type of data sources your chatbot will be using to answer questions
                                    </p>
                                    <div className="flex justify-between w-full mb-8">
                                        <label>
                                            <input
                                                type="checkbox"
                                                checked={source.type === "File/PDF"}
                                                onChange={(e) => handleInputChange(index, "type", "File/PDF")}
                                            />{' '}
                                            File/PDF
                                        </label>
                                        <br />
                                        <label>
                                            <input
                                                type="checkbox"
                                                checked={source.type === "Website"}
                                                onChange={(e) => handleInputChange(index, "type", "Website")}
                                            />{' '}
                                            Website
                                        </label>
                                        <br />
                                        <label>
                                            <input
                                                type="checkbox"
                                                checked={source.type === "Database"}
                                                onChange={(e) => handleInputChange(index, "type", "Database")}
                                            />{' '}
                                            Database
                                        </label>
                                    </div>
                                </div>


                                {source.type === "File/PDF" ?
                                    <>
                                        {source.error && <p className='text-red-900'>{source.error}</p>}

                                        <File
                                            imagesHandler={(images) => imagesHandler(images)}
                                            reset={false}
                                            company={company}
                                            setCompany={setCompany}
                                            setDone={setDone}
                                            files={[]}


                                            onDrop={onDrop}
                                            fileState={source}
                                            setFileState={setFileState}
                                        />
                                        {source.textContent && <div>
                                            <button
                                                type="button"
                                                onClick={() => handleSubmit(source.id, source)}
                                                className="flex w-full justify-center rounded-md bg-gray-800 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-gray-900 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gray-900"
                                                disabled={isLoading}
                                            >
                                                {isLoading || source.uploading ? <Spinner sm /> : `Upload`}
                                            </button>
                                        </div>}
                                    </>

                                    :
                                    source.type === "Website" && <>
                                        <div>
                                            {/* <label className='' htmlFor="company">Webpage URL you want to scrape data from with https</label> */}
                                            <input
                                                className="block mb-4 w-full border-gray-400 rounded-md border px-2 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"

                                                type={"text"}
                                                onChange={(e) => {
                                                    setWebsiteURL(e.target.value)
                                                    setDataSources((prevSources) =>
                                                        prevSources.map((s) =>
                                                            s.id === source.id ? {
                                                                ...s, name: e.target.value
                                                            } : s
                                                        )
                                                    );
                                                }}
                                                value={source.name}
                                                required={true}
                                                placeholder='Webpage URL you want to scrape data from with https'
                                            />
                                        </div>
                                        <div>
                                            <button
                                                type="button"
                                                onClick={() => scrape(source.id, source)}
                                                className="flex w-full justify-center rounded-md bg-gray-800 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-gray-900 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gray-900"
                                                disabled={isLoading}
                                            >
                                                {isLoading || source.uploading ? <Spinner sm /> : `Scrape`}
                                            </button>
                                        </div>
                                    </>
                                }

                            </div>
                            {/* Remove Button */}
                            {dataSources.length > 1 && (

                                <Trash style={{ cursor: "pointer" }} color='red' onClick={() => removeDataSource(index)} />

                            )}
                        </div>

                    ))}
                </div>

                {/* Add New Row Button */}
                <div className="flex space-x-4 mt-4">
                    <button
                        type="button"
                        onClick={addDataSource}
                        className="bg-green-500 text-white rounded px-4 py-2 hover:bg-green-600"
                    >
                        + Add Another Source
                    </button>

                    {/* Submit Button */}
                    {/* <button
                        type="submit"
                        className="bg-blue-500 text-white rounded px-4 py-2 hover:bg-blue-600"
                    >
                        Submit
                    </button> */}
                </div>


            </div>
        </div >
    );
};

export default FileUpload