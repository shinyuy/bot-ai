// pages/dashboard/account-settings.js
import React from 'react';

const AccountSettings = () => {
    return (
        <div className="bg-gray-100 min-h-screen p-8">
            <h1 className="text-3xl font-semibold text-gray-800">Account Settings</h1>
            <p className="text-lg text-gray-600 mt-2">Manage your account information and subscriptions.</p>

            <div className="bg-white shadow-lg rounded-lg p-6 mt-8">
                <h2 className="text-xl font-semibold text-gray-800">Personal Information</h2>
                <p className="text-gray-600 mt-4">Email: user@example.com</p>
                <button className="mt-4 bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700">Edit</button>
            </div>

            <div className="bg-white shadow-lg rounded-lg p-6 mt-8">
                <h2 className="text-xl font-semibold text-gray-800">Subscription Plan</h2>
                <p className="text-gray-600 mt-4">Current Plan: Pro ($49/month)</p>
                <button className="mt-4 bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700">Upgrade</button>
            </div>
        </div>
    );
};

export default AccountSettings;
