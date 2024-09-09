'use client';

import { useRetrieveCompaniesQuery } from '../../redux/features/companyApiSlice';
import { List, Spinner } from '../../components/common';
import { useEffect } from 'react';
import Link from 'next/link';
import { FaComments, FaUserFriends, FaClock } from 'react-icons/fa';

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
      {/* <div>
        <button className="rounded bg-black px-4 py-2 text-white"><Link href={"/dashboard/company"}>Create a Chatbot</Link></button>
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


      </div> */}




      <div className="bg-gray-100 min-h-screen p-8">
        <h1 className="text-4xl font-bold text-gray-800">Dashboard Overview</h1>
        <p className="text-xl text-gray-600 mt-2">Monitor your chatbot's performance at a glance.</p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-8">
          {/* Total Chats */}
          <div className="bg-white shadow-lg rounded-lg p-6 flex flex-col items-start space-y-4">
            <FaComments className="text-blue-600 text-3xl" />
            <h2 className="text-2xl font-bold text-gray-800">Total Chats</h2>
            <p className="text-3xl text-blue-600 font-semibold">1,234</p>
            <p className="text-gray-500">Chats handled by your chatbot</p>
          </div>

          {/* Active Users */}
          <div className="bg-white shadow-lg rounded-lg p-6 flex flex-col items-start space-y-4">
            <FaUserFriends className="text-green-600 text-3xl" />
            <h2 className="text-2xl font-bold text-gray-800">Active Users</h2>
            <p className="text-3xl text-green-600 font-semibold">89</p>
            <p className="text-gray-500">Users engaging with the bot</p>
          </div>

          {/* Average Response Time */}
          <div className="bg-white shadow-lg rounded-lg p-6 flex flex-col items-start space-y-4">
            <FaClock className="text-yellow-600 text-3xl" />
            <h2 className="text-2xl font-bold text-gray-800">Avg. Response Time</h2>
            <p className="text-3xl text-yellow-600 font-semibold">1.2s</p>
            <p className="text-gray-500">Average time to respond</p>
          </div>
        </div>
      </div>
    </section>
  );
}
