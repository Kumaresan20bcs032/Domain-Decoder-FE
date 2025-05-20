import { useState, useEffect } from "react";
import ToasterComponent from "../Components/ToasterComponent";
import { ClipLoader } from "react-spinners";
import { successToaster, errorToaster } from "../Services/toaster";
import { getSslViewerInformation } from "../Services/apiService";
import { useSearchParams } from "react-router";

const SslViewer = () => {
    const [loader, setLoader] = useState(false);
    const [sslData, setSslData] = useState({});
    const [color] = useState("#36d7b7");
    const [host, setHost] = useState("");
    const [searchParam, setSearchParam] = useSearchParams();

    useEffect(() => {
        const searchHost = searchParam.get("host");
        if (searchHost) {
            setHost(searchHost);
            fetchSslInformation(searchHost, false);
        }
    }, []);

    async function fetchSslInformation(hostValue, isToaster = true) {
        setLoader(true);
        try {
            const sslData = await getSslViewerInformation({ host: hostValue });

            if (isToaster) {
                successToaster(sslData?.message);
            }
            setSslData(sslData.data);
        } catch (error) {
            errorToaster(error.message);
        } finally {
            setLoader(false);
        }
    }

    const handleSearch = () => {
        if (!host.trim()) {
            errorToaster("Please enter a host/domain.");
            return;
        }
        setSearchParam({ host });
        fetchSslInformation(host, true);
    };

    return (
        <div className="min-h-screen bg-gray-50 flex flex-col items-center py-16 px-6">
            <ToasterComponent />

            <h1 className="text-4xl font-extrabold text-gray-900 mb-10">
                SSL Certificate Viewer
            </h1>

            <div className="flex flex-col sm:flex-row gap-4 w-full max-w-xl mb-10">
                <input
                    type="text"
                    placeholder="Enter domain (e.g., www.example.com)"
                    value={host}
                    onChange={(e) => setHost(e.target.value)}
                    onKeyDown={(e) => {
                        if (e.key === "Enter") handleSearch();
                    }}
                    className="flex-grow p-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <button
                    onClick={handleSearch}
                    className="px-7 py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg shadow-md transition"
                    aria-label="Lookup SSL information"
                >
                    Lookup
                </button>
            </div>

            <div className="w-full max-w-5xl bg-white rounded-lg shadow-lg p-8 min-h-[300px]">
                {loader ? (
                    <div className="flex justify-center items-center h-48">
                        <ClipLoader color={color} loading={loader} size={60} />
                    </div>
                ) : Object.keys(sslData).length > 0 ? (
                    <div className="space-y-6 text-gray-700 text-sm">
                        {
                        Object.entries(sslData).map(([key, value]) => (
                            <div key={key} className="break-words">
                                <h3 className="text-lg font-semibold text-gray-800 capitalize mb-1">
                                    {key.replace(/([A-Z])/g, " $1")}
                                </h3>
                                <div className="ml-4">

                                    {key == "infoAccess" ? Object.entries(key).map(([key, value]) => {
                                        <div key={key} className="break-words">
                                            <h3 className="text-lg font-semibold text-gray-800 capitalize mb-1">
                                                {key.replace(/([A-Z])/g, " $1")}
                                            </h3>

                                            <div className="ml-4">
                                                {Array.isArray(value) && value.length > 1 ? (
                                                    <ul className="list-disc list-inside space-y-0.5">
                                                        {value.map((item, idx) => (
                                                            <li key={idx} className="break-words">
                                                                {item}
                                                            </li>
                                                        ))}
                                                    </ul>
                                                ) : typeof value === "object" && value !== null ? (
                                                    <pre className="bg-gray-100 rounded-md p-3 overflow-x-auto text-xs">
                                                        {JSON.stringify(value, null, 2)}
                                                    </pre>
                                                ) : (
                                                    <span>{String(value) || "—"}</span>
                                                )}
                                            </div>
                                        </div>


                                    }) :

                                        Array.isArray(value) && value.length > 1 ? (
                                            <ul className="list-disc list-inside space-y-0.5">
                                                {value.map((item, idx) => (
                                                    <li key={idx} className="break-words">
                                                        {item}
                                                    </li>
                                                ))}
                                            </ul>
                                        ) : typeof value === "object" && value !== null ? (
                                            <pre className="bg-gray-100 rounded-md p-3 overflow-x-auto text-xs">
                                                {JSON.stringify(value, null, 2)}
                                            </pre>
                                        ) : (
                                            <span>{String(value) || "—"}</span>
                                        )

                                    }

                                </div>
                            </div>
                        ))}
                    </div>
                ) : (
                    <p className="text-center text-gray-400 italic">
                        No data to display. Please enter a domain and click Lookup.
                    </p>
                )}
            </div>
        </div>
    );
};

export default SslViewer;
