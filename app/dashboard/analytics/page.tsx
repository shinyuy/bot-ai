// AnalyticsPage.js
import React from 'react';

const AnalyticsPage = () => {
    return (
        <div className="container mx-auto p-6">
            <h1 className="text-3xl font-bold mb-4">Analytics Dashboard</h1>

            {/* Overview Section */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
                {["Total Chats", "Active Sessions", "Users", "CSAT Score"].map((stat, i) => (
                    <div key={i} className="bg-white shadow-md p-6 rounded-lg">
                        <h2 className="text-xl font-semibold mb-2">{stat}</h2>
                        <p className="text-2xl font-bold">[Data Here]</p>
                    </div>
                ))}
            </div>

            {/* Detailed Metrics Section */}
            <div className="bg-white shadow-md p-6 rounded-lg mb-8">
                <h2 className="text-2xl font-semibold mb-4">Engagement Over Time</h2>
                {/* Placeholder for Chart */}
                <div className="h-48 bg-gray-100 rounded-lg mb-4">[Chart Component]</div>
            </div>

            {/* Company-Based Insights */}
            <div className="bg-white shadow-md p-6 rounded-lg mb-8">
                <h2 className="text-2xl font-semibold mb-4">Company-Based Insights</h2>
                <div className="overflow-x-auto">
                    <table className="min-w-full bg-white">
                        <thead>
                            <tr>
                                <th className="py-2">Company</th>
                                <th className="py-2">Interactions</th>
                                <th className="py-2">Avg Response Time</th>
                                <th className="py-2">Top Questions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {/* Data Rows */}
                            <tr>
                                <td className="py-2">[Company A]</td>
                                <td className="py-2">[Data]</td>
                                <td className="py-2">[Data]</td>
                                <td className="py-2">[Data]</td>
                            </tr>
                            {/* More Rows */}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default AnalyticsPage;
