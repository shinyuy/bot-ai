import { useFormContext } from 'react-hook-form';
import { useState } from 'react';

import { validateEmail } from '../../../utils';
import { StepperFormValues } from '../../types/hook-stepper';
import File from '../../common/File';
import { useRetrieveCompaniesQuery } from '../../../redux/features/companyApiSlice';
import { Spinner } from '../../common';
import { useFileMutation } from '../../../redux/features/fileApiSlice';
import { useSearchParams } from 'next/navigation';
import pdfToText from 'react-pdftotext';
import { toast } from 'react-toastify';
// import { useAppDispatch } from '@/redux/hooks';

const FileUpload = ({ setActiveStep }) => {
  // const dispatch = useAppDispatch();
  const { data: companies, isLoading, isFetching } = useRetrieveCompaniesQuery('');
  const [file, { /*isLoading*/ }] = useFileMutation();
  const searchParams = useSearchParams();
  const [website, setWebsite] = useState(searchParams.get('website'))
  const [id, setId] = useState(searchParams.get('company_id'))

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
        setFileState({ error: 'Image size must not exceed 500000 MB' });
      } else {
        let formData = new FormData();

        formData.append('file', files[0]);
        const pdfText = await pdfToText(pdf);
        setFileState({ ...fileState, name: pdf.name, textContent: pdfText })
        if (!website) {
          setWebsite(companies[0].name)
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
        setActiveStep(4)
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

          <select onChange={e => { setWebsite(e.target.value.split(" ")[0]); setWebsite(e.target.value.split(" ")[1]) }} className="block w-full rounded-md border-0 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
            name="company" id="company">
            {companies?.map((com, i) =>
              <option key={i} value={com.name + " " + com.id}>{com.name}</option>
            )}
          </select> </div>
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
            className="flex w-full justify-center rounded-md bg-black px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            disabled={isLoading}
          >
            {isLoading || fileState.uploading ? <Spinner sm /> : `Upload`}
          </button>
        </div>
      </div>
    </div>
  );
};

export default FileUpload
