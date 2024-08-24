'use client';

import { useRetrieveCompaniesQuery } from '../../redux/features/companyApiSlice';
import { List, Spinner } from '../../components/common';
import { useEffect } from 'react';
import Link from 'next/link';

export default function Page() {
  const { data: companies, isLoading, isFetching } = useRetrieveCompaniesQuery('');

  useEffect(() => {

  }, []);

  if (isLoading || isFetching) {
    return (
      <div className="my-8 flex justify-center">
        <Spinner lg />
      </div>
    );
  }

  return (
    <section>
      <div>
        <button className="rounded bg-black px-4 py-2 text-white">Create a Chatbot</button>
        <h2 className="text-black mt-8">Your Companies</h2>
        <div className=''>
          <table className="w-1/2 divide-y divide-gray-200 dark:divide-neutral-700">
            <thead>
              <tr className='w-1/2'>
                <th scope="col" className="px-6 py-3 text-start text-xs font-medium text-gray-500 uppercase dark:text-neutral-500">Company</th>
                <th scope="col" className="px-6 py-3 text-start text-xs font-medium text-gray-500 uppercase dark:text-neutral-500">Contact</th>
                <th scope="col" className="px-6 py-3 text-start text-xs font-medium text-gray-500 uppercase dark:text-neutral-500">Country</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200 dark:divide-neutral-700">
              {companies?.map((company, i) => {
                return (
                  <tr className="hover:bg-gray-100 dark:hover:bg-gray-100 hover:cursor-pointer">
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium  text-black"><Link href={`/dashboard/data_store?website=${company.website}&company_id=${company.id}`}>{company.name}</Link></td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-black"><Link href={`/dashboard/data_store?website=${company.website}&company_id=${company.id}`}>{company.website}</Link></td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-black"><Link href={`/dashboard/data_store?website=${company.website}&company_id=${company.id}`}>{company.country}</Link></td>
                  </tr>

                )
              })}
            </tbody>
          </table>
        </div>


      </div>
    </section>
  );
}
