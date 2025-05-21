import { useState, useEffect } from "react";
import ToasterComponent from "../Components/ToasterComponent";
import { ClipLoader } from "react-spinners";
import { successToaster, errorToaster } from "../Services/toaster";
import { getSslViewerInformation } from "../Services/apiService";
import { useSearchParams } from "react-router";

const SslViewer = () => {
    const [loader, setLoader] = useState(false);
    const [sslData, setSslData] = useState({});
    const [color] = useState("#14B8A6"); // Tailwind teal-400 for spinner
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

    const loadDataDynamically = (value, keyName = "") => {
        if (
            typeof value === "string" ||
            typeof value === "boolean" ||
            typeof value === "number" ||
            value === null
        ) {
            return (
                <span className="text-gray-900 dark:text-gray-100 font-medium">
                    {String(value)}
                </span>
            );
        } else if (Array.isArray(value)) {
            return (
                <ul className="list-disc list-inside space-y-1 ml-5 text-gray-800 dark:text-gray-300">
                    {value.map((item, idx) => (
                        <li key={idx}>{loadDataDynamically(item)}</li>
                    ))}
                </ul>
            );
        } else if (typeof value === "object") {
            return (
                <div className="ml-5 space-y-4">
                    {Object.entries(value).map(([key, val]) => (
                        <div key={key} className="break-words">
                            <h4 className="text-md font-semibold text-teal-600 dark:text-teal-400 capitalize mb-1 tracking-wide">
                                {key.replace(/([A-Z])/g, " $1")}
                            </h4>
                            <div className="pl-2 border-l-2 border-teal-300 dark:border-teal-700">
                                {loadDataDynamically(val, key)}
                            </div>
                        </div>
                    ))}
                </div>
            );
        }
        return <span className="text-gray-500">—</span>;
    };

    return (
        <div
            className="min-h-screen flex flex-col items-center py-16 px-6 transition-colors duration-500
                 bg-gradient-to-b from-cyan-50 to-white dark:from-gray-900 dark:to-gray-800 pt-40"
        >
            <ToasterComponent />

            <h1 className="text-5xl font-extrabold mb-12 drop-shadow-md text-teal-700 dark:text-teal-400">
                SSL Certificate Viewer
            </h1>

            <div className="flex flex-col sm:flex-row gap-5 w-full max-w-xl mb-12">
                <input
                    type="text"
                    placeholder="Enter domain (e.g., www.example.com)"
                    value={host}
                    onChange={(e) => setHost(e.target.value)}
                    onKeyDown={(e) => {
                        if (e.key === "Enter") handleSearch();
                    }}
                    className="flex-grow p-4 rounded-lg text-lg placeholder-red-300
             bg-white/30 backdrop-blur-md border border-white/30
             shadow-lg shadow-cyan-200/30 dark:shadow-cyan-900/50
             focus:outline-none focus:ring-4 focus:ring-teal-400
             dark:placeholder-red-500 dark:border-white/20 dark:bg-gray-900/30
             transition"
                    aria-label="Domain Input"
                />
                <button
                    onClick={handleSearch}
                    className="px-8 py-4 rounded-lg font-semibold
                     bg-gradient-to-tr from-teal-600 to-cyan-400
                     hover:from-teal-700 hover:to-cyan-500
                     text-white shadow-lg shadow-cyan-500/60
                     transition duration-300"
                    aria-label="Lookup SSL information"
                >
                    Lookup SSL
                </button>
            </div>

            <div
                className="w-full max-w-5xl rounded-xl p-10 min-h-[320px] max-h-[600px] overflow-auto prose prose-sm
                   bg-white/30 backdrop-blur-md border border-white/30
                   shadow-lg shadow-teal-300/40 dark:shadow-teal-900/80
                   dark:bg-gray-900/30 dark:border-white/20
                   text-gray-900 dark:text-gray-100"
            >
                {loader ? (
                    <div className="flex justify-center items-center h-48">
                        <ClipLoader color={color} loading={loader} size={60} />
                    </div>
                ) : Object.keys(sslData).length > 0 ? (
                    loadDataDynamically(sslData)
                ) : (
                    <p className="text-center text-gray-400 italic select-none">
                        No data to display. Please enter a domain and click Lookup.
                    </p>
                )}
            </div>
        </div>
    );
};

export default SslViewer;
