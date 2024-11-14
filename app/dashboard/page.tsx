'use client';

import { useRetrieveStatsQuery } from '../../redux/features/statsApiSlice';
import { List, Spinner } from '../../components/common';
import { useEffect } from 'react';
import Link from 'next/link';
import { FaComments, FaPlus, FaUserFriends, FaClock } from 'react-icons/fa';

export default function Page() {
  const { data: stats, isLoading, isFetching } = useRetrieveStatsQuery({});
  console.log(stats)

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
      <div className="bg-gray-100 min-h-screen p-8">
        <h1 className="text-4xl font-bold text-gray-800">Dashboard Overview</h1>
        <p className="text-xl text-gray-600 mt-2">Monitor your chatbot's performance at a glance.</p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-8">

          <div className="bg-white shadow-lg rounded-lg p-6 flex flex-col items-start space-y-4">
            <FaComments className="text-blue-600 text-3xl" />
            <h2 className="text-2xl font-bold text-gray-800">Total Chats</h2>
            <p className="text-3xl text-blue-600 font-semibold">{stats?.chats}</p>
            <p className="text-gray-500">Chats handled by your chatbot</p>
          </div>

          <div className="bg-white shadow-lg rounded-lg p-6 flex flex-col items-start space-y-4">
            <FaUserFriends className="text-green-600 text-3xl" />
            <h2 className="text-2xl font-bold text-gray-800">Chatbots</h2>
            <p className="text-3xl text-green-600 font-semibold">{stats?.chatbots}</p>
            <p className="text-gray-500">Your Chatbots</p>
          </div>

          <div className="bg-white shadow-lg rounded-lg p-6 flex flex-col items-start space-y-4">
            <FaClock className="text-yellow-600 text-3xl" />
            <h2 className="text-2xl font-bold text-gray-800">Data Sources</h2>
            <p className="text-3xl text-yellow-600 font-semibold">{stats?.data_sources}</p>
            <p className="text-gray-500">Data sources used by your chatbots</p>
          </div>
        </div>

        <Link href="/dashboard/manage_chatbots">
          <button
            className="bg-gray-800 text-white mt-12 py-2 px-6 rounded-lg hover:bg-gray-900 flex items-center space-x-2"
          // onClick={() => setCreate(!create)}
          >
            <FaPlus />
            <span>Create Chatbot</span>
          </button>
        </Link>

      </div>
    </section>
  );
}
