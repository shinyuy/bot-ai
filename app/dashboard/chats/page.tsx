'use client';

import { useRetrieveChatsQuery } from '../../../redux/features/chatsApiSlice';
import { useRetrieveCompaniesQuery } from '../../../redux/features/companyApiSlice';
import { List, Spinner } from '../../../components/common';
import { useEffect } from 'react';
import Link from 'next/link';

export default function Page() {
    const { data: companies } = useRetrieveCompaniesQuery('');
    const { data: chats, isLoading, isFetching } = useRetrieveChatsQuery({ company_id: companies && companies[0].id });

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
                <h2 className="text-black mt-8">Chat History</h2>
                <div className=''>
                    <table className="table-fixed w-full divide-y divide-gray-200 dark:divide-neutral-700 ">
                        <thead>
                            <tr className='w-1/2'>
                                <th scope="col" className="px-6 py-3 text-start text-xs font-medium text-gray-500 uppercase dark:text-neutral-500">Question</th>
                                <th scope="col" className="px-6 py-3 text-start text-xs font-medium text-gray-500 uppercase dark:text-neutral-500">Answer</th>
                                <th scope="col" className="px-6 py-3 text-start text-xs font-medium text-gray-500 uppercase dark:text-neutral-500">On</th>
                                <th scope="col" className="px-6 py-3 text-start text-xs font-medium text-gray-500 uppercase dark:text-neutral-500">Data Source</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-gray-200 dark:divide-neutral-700">
                            {chats?.map((chat, i) => {
                                return (
                                    <tr className="hover:bg-gray-100 dark:hover:bg-gray-100 hover:cursor-pointer">
                                        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium  text-black">{chat.question}</td>
                                        <td className="px-6 truncate py-4 whitespace-nowrap text-sm font-medium text-black">{chat.answer}</td>
                                        <td className="px-6 w-32 py-4 whitespace-nowrap text-sm font-medium text-black">{chat.created_at.slice(0, 10)}</td>
                                        <td className="px-6 w-32 py-4 whitespace-nowrap text-sm font-medium text-black">{chat.data_source}</td>
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
