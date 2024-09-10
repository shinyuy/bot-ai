
import { useState } from 'react';

import File from '../common/File';
import { useRetrieveCompaniesQuery } from '../../redux/features/companyApiSlice';
import { Spinner } from '../common';
import { useFileMutation } from '../../redux/features/fileApiSlice';
import { useSearchParams } from 'next/navigation';
import pdfToText from 'react-pdftotext';
import { toast } from 'react-toastify';
// import { useAppDispatch } from '@/redux/hooks';
import CheckBox from './Checkbox';

const FileUpload = ({ setActiveStep }: { setActiveStep }) => {
    // const dispatch = useAppDispatch();
    const { data: companies, isLoading, isFetching } = useRetrieveCompaniesQuery('');
    const [file, { /*isLoading*/ }] = useFileMutation();
    const searchParams = useSearchParams();
    const [website, setWebsite] = useState(searchParams.get('website'))
    const [id, setId] = useState(searchParams.get('company_id'))
    const [checked, setChecked] = useState("File/PDF");
    const [websiteURL, setWebsiteURL] = useState("")

    const [company, setCompany] = useState({});
    const [done, setDone] = useState(false);
    const [fileState, setFileState] = useState({
        uploadedFiles: [],
        uploading: false,
        error: '',
        width: null,
        name: '',
        textContent: ''
    });

    const ext = (f) => f.split('.').pop();

    const extractText = async (f) => {
        let content = await pdfToText(f);

        return content;
    };

    const onDrop = async (files) => {
        const pdf = files[0];

        if (pdf && ext(pdf.name) === 'pdf') {
            if (files[0].size > 5000000) {
                setFileState({ ...fileState, error: 'Image size must not exceed 500000 MB' });
            } else {
                let formData = new FormData();

                formData.append('file', files[0]);
                const pdfText = await pdfToText(pdf);
                setFileState({ ...fileState, name: pdf.name, textContent: pdfText })
                if (!website) {
                    setWebsite(companies[0].website)
                    setId(companies[0].id)
                }

            }
        }
    }

    const handleSubmit = async () => {
        if (!website) {
            setFileState({ ...fileState, error: "Select/Add company to associate data with" })
            return
        }
        setFileState({ ...fileState, error: '', uploading: true });
        await file({ pdfText: fileState.textContent, name: fileState.name, website, id })
            .unwrap()
            .then(() => {
                //dispatch(setAuth());
                toast.success('File upload');
                setActiveStep(3)
            })
            .catch(() => {
                toast.error('Failed to upload file');
            });
    }

    const scrape = async () => {
        setFileState({ ...fileState, error: '', uploading: true });
        let res = await fetch(`https://r.jina.ai/${websiteURL}`, {
            method: 'GET',
            headers: {
                "Authorization": "Bearer jina_10568554771c46eca0d4caffc253fb66bMCO5AhkNkQpzHwfSkFOQJ-tChbA"
            },
        })
        let data = await res.text()
        console.log(data)

        if (!website) {
            setWebsite(companies[0].website)
            setId(companies[0].id)
        }
        if (!website) {
            setFileState({ ...fileState, error: "Select/Add company to associate data with" })
            return
        }
        await file({ pdfText: data, name: websiteURL, website, id })
            .unwrap()
            .then(() => {
                //dispatch(setAuth());
                toast.success('File upload');
                setActiveStep(3)
            })
            .catch(() => {
                toast.error('Failed to upload file');
            });

    }

    const imagesHandler = (files) => {
        // setCompany({...company})
    };

    return (
        <div className="flex min-h-80 w-full flex-col items-center">
            <h4 className="stepper_step_heading my-8">File Upload</h4>
            <div className="w-1/2">
                <div>
                    <label className='' htmlFor="company">Company to associate data with</label>

                    <select onChange={e => { setWebsite(e.target.value.split(" ")[0]); setId(e.target.value.split(" ")[1]) }} className="block w-full rounded-md border-0 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                        name="company" id="company">
                        {companies?.map((com, i) =>
                            <option key={i} value={com.website + " " + com.id}>{com.name}</option>
                        )}
                    </select> </div>
                <div className='my-16'>
                    <p className="mb-8">
                        Select the type of data sources your chatbot will be using to answer questions
                    </p>
                    <div className="flex justify-between w-full">
                        <CheckBox label="File/PDF" value="File/PDF" checked={checked} check={() => setChecked("File/PDF")} />
                        <CheckBox label="Website" value="Website" checked={checked} check={() => setChecked("Website")} />
                        <CheckBox label="Database" value="Database" checked={checked} check={() => setChecked("Database")} />
                    </div>
                </div>

                {checked === "File/PDF" &&
                    <>
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
                        <div>
                            <button
                                type="button"
                                onClick={handleSubmit}
                                className="flex w-full justify-center rounded-md bg-gray-800 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-gray-900 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gray-900"
                                disabled={isLoading}
                            >
                                {isLoading || fileState.uploading ? <Spinner sm /> : `Upload`}
                            </button>
                        </div>
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
                                className="flex w-full justify-center rounded-md bg-gray-800 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-gray-900 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                                disabled={isLoading}
                            >
                                {isLoading || fileState.uploading ? <Spinner sm /> : `Scrape Website`}
                            </button>
                        </div>
                    </>
                }
            </div>
        </div>
    );
};

export default FileUpload