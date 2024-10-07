'use client';

import React from 'react';
import { useRetrieveUserQuery } from '../../../redux/features/authApiSlice';


const AccountSettings = () => {
    const { data: user, isFetching } = useRetrieveUserQuery();

    return (
        <div className="bg-gray-100 min-h-screen p-8">
            <h1 className="text-3xl font-semibold text-gray-800">Account Settings</h1>
            <p className="text-lg text-gray-600 mt-2">Manage your account information and subscriptions.</p>

            <div className="bg-white shadow-lg rounded-lg p-6 mt-8">
                <h2 className="text-xl font-semibold text-gray-800">Personal Information</h2>
                <p className="text-gray-600 mt-4 font-bold">{user?.first_name} {user?.last_name}</p>
                <p className="text-gray-600 mt-4">Email: {user?.email}</p>
                <button className="mt-4 bg-gray-800 text-white py-2 px-4 rounded-lg hover:bg-gray-900">Edit</button>
            </div>

            <div className="bg-white shadow-lg rounded-lg p-6 mt-8">
                <h2 className="text-xl font-semibold text-gray-800">Subscription Plan</h2>
                <p className="text-gray-600 mt-4">Current Plan: Pro ($49/month)</p>
                <button className="mt-4 bg-gray-800 text-white py-2 px-4 rounded-lg hover:bg-gray-900">Upgrade</button>
            </div>
        </div>
    );
};

export default AccountSettings;
