'use client';

import { useRetrieveChatsQuery } from '../../../redux/features/chatsApiSlice';
import { useRetrieveCompaniesQuery } from '../../../redux/features/companyApiSlice';
import { List, Spinner } from '../../../components/common';
import { useEffect } from 'react';

export default function Page() {
    const { data: companies } = useRetrieveCompaniesQuery('');
    const { data: chats, isLoading, isFetching } = useRetrieveChatsQuery({ company_id: companies && companies[0]?.id });

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
        <div className="container mx-auto p-6 mb-48">
            <h1 className="text-2xl text-gray-900 font-bold mb-6">Chat History</h1>

            {/* Chat history table */}
            <table className="min-w-full bg-white">
                <thead>
                    <tr>
                        <th className="text-left text-gray-900 py-2 px-4">Data Source</th>
                        <th className="text-left text-gray-900 py-2 px-4">Question</th>
                        <th className="text-left text-gray-900 py-2 px-4">Response</th>
                        <th className="text-left text-gray-900 py-2 px-4">Timestamp</th>
                    </tr>
                </thead>
                <tbody>
                    {chats?.map((chat, i) => (
                        <tr key={i} className="border-b">
                            <td className="py-2 px-4">{chat.data_source}</td>
                            <td className="py-2 px-4">{chat.question}</td>
                            <td className="py-2 px-4">{chat.answer}</td>
                            <td className="py-2 px-4">{chat.created_at.slice(0, 10)}</td>
                        </tr>
                    ))}
                </tbody>
            </table>

            {/* Placeholder for empty state */}
            {chats?.length === 0 && (
                <div className="text-center py-4">
                    <p className="text-gray-600">No chat history available yet.</p>
                </div>
            )}
        </div>
    );
}
