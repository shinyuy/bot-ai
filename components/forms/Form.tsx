import { ChangeEvent, FormEvent } from 'react';
import { Input } from '../forms';
import { Spinner } from '../common';
import data from '../../utils/countries.json';
import { industries } from '../../utils/industries';

interface Config {
  labelText: string;
  labelId: string;
  type: string;
  value: string;
  link?: {
    linkText: string;
    linkUrl: string;
  };
  required?: boolean;
}

interface Props {
  config: Config[];
  isLoading: boolean;
  btnText: string;
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
  onSubmit: (event: FormEvent<HTMLFormElement>) => void;
}

export default function Form({ config, isLoading, btnText, onChange, onSubmit }: Props) {

  const handleChange = (e) => {
    onChange(e)
  }
  return (
    <form className="space-y-6" onSubmit={onSubmit}>
      {config.map((input) => {
        if (input.labelId === 'country') {
          return (
            <div>
              <label className='block text-sm font-medium leading-6 text-gray-800' htmlFor="country">Country where your business is based</label>

              <select onChange={e => handleChange(e)} value={input.value} className="block w-full rounded-md border-0 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                name="country" id="country">
                <option value="">Select country</option>
                {data.countries.map((country, i) =>
                  <option key={i} value={country.name}>{country.name}</option>
                )}
              </select> </div>
          )

        } else if (input.labelId === 'industry') {
          return (
            <div>
              <label className='block text-sm font-medium leading-6 text-gray-800' htmlFor="industry">Which industry does your company operate in ?</label>

              <select onChange={e => handleChange(e)} value={input.value} className="block w-full rounded-md border-0 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                name="industry" id="industry">
                <option value="">Select industry</option>
                {industries.map((industry, i) =>
                  <option key={i} value={industry}>{industry}</option>
                )}
              </select> </div>
          )
        } else {
          return (
            <Input
              key={input.labelId}
              labelId={input.labelId}
              type={input.type}
              onChange={onChange}
              value={input.value}
              link={input.link}
              required={input.required}
            >
              {input.labelText}
            </Input>
          )
        }

      })}

      <div>
        <button
          type="submit"
          className="flex w-full justify-center rounded-md bg-gray-800 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-gray-900 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
          disabled={isLoading}
        >
          {isLoading ? <Spinner sm /> : `${btnText}`}
        </button>
      </div>
    </form>
  );
}
