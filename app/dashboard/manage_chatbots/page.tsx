"use client"
// pages/dashboard/manage-chatbots.js
import React, { useState } from 'react';
import { FaEdit, FaTrash, FaPlus } from 'react-icons/fa';

const ManageChatbots = () => {
    const [showModal, setShowModal] = useState(false);

    const handleModalToggle = () => setShowModal(!showModal);

    return (
        <div className="bg-gray-100 min-h-screen p-8">
            <h1 className="text-4xl font-bold text-gray-800">Manage Your Chatbots</h1>
            <p className="text-xl text-gray-600 mt-2">Create, edit, or delete your chatbots with ease.</p>

            <div className="mt-8 space-y-6">
                {/* Chatbot List */}
                <div className="bg-white shadow-lg rounded-lg p-6 flex justify-between items-center">
                    <div>
                        <h2 className="text-2xl font-bold text-gray-800">Customer Support Bot</h2>
                        <p className="text-gray-600">Data Source: PDF</p>
                    </div>
                    <div className="flex space-x-4">
                        <button className="bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 flex items-center space-x-2">
                            <FaEdit />
                            <span>Edit</span>
                        </button>
                        <button className="bg-red-600 text-white py-2 px-4 rounded-lg hover:bg-red-700 flex items-center space-x-2">
                            <FaTrash />
                            <span>Delete</span>
                        </button>
                    </div>
                </div>

                {/* Add Chatbot Button */}
                <button
                    className="bg-green-600 text-white py-2 px-6 rounded-lg hover:bg-green-700 flex items-center space-x-2"
                    onClick={handleModalToggle}
                >
                    <FaPlus />
                    <span>Add New Chatbot</span>
                </button>

                {/* Modal for Adding New Chatbot */}
                {showModal && (
                    <div className="fixed inset-0 flex justify-center items-center bg-gray-900 bg-opacity-50">
                        <div className="bg-white p-8 rounded-lg shadow-lg space-y-4">
                            <h3 className="text-2xl font-bold text-gray-800">Add New Chatbot</h3>
                            <input
                                type="text"
                                placeholder="Chatbot Name"
                                className="border border-gray-300 p-2 rounded-lg w-full"
                            />
                            <button
                                className="bg-green-600 text-white py-2 px-4 rounded-lg hover:bg-green-700"
                                onClick={handleModalToggle}
                            >
                                Add Chatbot
                            </button>
                            <button
                                className="bg-gray-400 text-white py-2 px-4 rounded-lg hover:bg-gray-500"
                                onClick={handleModalToggle}
                            >
                                Cancel
                            </button>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};

export default ManageChatbots;
