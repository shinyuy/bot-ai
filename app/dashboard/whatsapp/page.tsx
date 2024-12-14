// export default function WhatsApp() {
//     return (
//         <div>
//             <h2>WhatsApp Integration</h2>
//         </div>
//     )
// }
"use client"
import { useState } from "react";

const DataSourceInput = () => {
    const [dataSources, setDataSources] = useState([
        { type: "url", value: "" },
    ]);

    // Handler for changing the input type or value
    const handleInputChange = (index, key, value) => {
        const updatedDataSources = [...dataSources];
        updatedDataSources[index][key] = value;
        setDataSources(updatedDataSources);
    };

    // Handler for adding a new input row
    const addDataSource = () => {
        setDataSources([...dataSources, { type: "url", value: "" }]);
    };

    // Handler for removing a row
    const removeDataSource = (index) => {
        const updatedDataSources = dataSources.filter((_, i) => i !== index);
        setDataSources(updatedDataSources);
    };

    // Handler for form submission
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Submitted Data Sources:", dataSources);
        // Add logic to send the data to the backend via API
    };

    return (
        <form onSubmit={handleSubmit} className="w-full max-w-2xl mx-auto mt-10">
            <div>
                {dataSources.map((source, index) => (
                    <div
                        key={index}
                        className="flex items-center space-x-4 mb-4 bg-gray-50 p-4 rounded shadow"
                    >
                        {/* Type Selector */}
                        <select
                            value={source.type}
                            onChange={(e) => handleInputChange(index, "type", e.target.value)}
                            className="border border-gray-300 rounded px-3 py-2 w-1/4"
                        >
                            <option value="url">Website URL</option>
                            <option value="pdf">PDF</option>
                            <option value="database">Database</option>
                        </select>

                        {/* Input Field */}
                        <input
                            type="text"
                            value={source.value}
                            placeholder={`Enter ${source.type === "url" ? "Website URL" : source.type === "pdf" ? "PDF URL" : "Database Connection"}`}
                            onChange={(e) => handleInputChange(index, "value", e.target.value)}
                            className="flex-1 border border-gray-300 rounded px-3 py-2"
                        />

                        {/* Remove Button */}
                        {dataSources.length > 1 && (
                            <button
                                type="button"
                                onClick={() => removeDataSource(index)}
                                className="bg-red-500 text-white rounded px-3 py-2 hover:bg-red-600"
                            >
                                Remove
                            </button>
                        )}
                    </div>
                ))}
            </div>

            {/* Add New Row Button */}
            <div className="flex space-x-4 mt-4">
                <button
                    type="button"
                    onClick={addDataSource}
                    className="bg-green-500 text-white rounded px-4 py-2 hover:bg-green-600"
                >
                    + Add Another Source
                </button>

                {/* Submit Button */}
                <button
                    type="submit"
                    className="bg-blue-500 text-white rounded px-4 py-2 hover:bg-blue-600"
                >
                    Submit
                </button>
            </div>
        </form>
    );
};

export default DataSourceInput;
