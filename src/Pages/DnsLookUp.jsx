import { useState, useEffect } from "react";
import { getDnsLookUpInformation } from "../Services/apiService";
import { ClipLoader } from "react-spinners";
import { successToaster, errorToaster } from "../Services/toaster";
import { useSearchParams } from "react-router";
import ToasterComponent from "../Components/ToasterComponent";

const DnsLookUp = () => {
    const [loader, setLoader] = useState(false);
    const [dnsData, setDnsData] = useState(null);
    const [color] = useState("#14B8A6"); // Tailwind teal-400 spinner color
    const [host, setHost] = useState("");
    const [searchParams, setSearchParams] = useSearchParams();

    useEffect(() => {
        const hostParam = searchParams.get("host");
        if (hostParam) {
            setHost(hostParam);
            fetchDnsData(hostParam, false);
        }
    }, []);

    const fetchDnsData = async (domain, showToast = true) => {
        setLoader(true);
        try {
            const result = await getDnsLookUpInformation({ host: domain });
            if (showToast) successToaster(result.message || "Data fetched successfully");
            setDnsData(result.data);
        } catch (error) {
            errorToaster(error.message || "Something went wrong");
        } finally {
            setLoader(false);
        }
    };

    const handleSearch = () => {
        if (!host.trim()) {
            errorToaster("Please enter a domain.");
            return;
        }
        setSearchParams({ host });
        fetchDnsData(host, true);
    };

    const renderData = (data) => {
        if (
            typeof data === "string" ||
            typeof data === "number" ||
            typeof data === "boolean" ||
            data === null
        ) {
            return (
                <span className="text-gray-900 dark:text-gray-100 font-medium break-words">
                    {String(data)}
                </span>
            );
        }
        if (Array.isArray(data)) {
            return (
                <ul className="list-disc list-inside space-y-1 ml-5 text-gray-800 dark:text-gray-300">
                    {data.map((item, idx) => (
                        <li key={idx}>{renderData(item)}</li>
                    ))}
                </ul>
            );
        }
        if (typeof data === "object") {
            return (
                <div className="ml-5 space-y-4">
                    {Object.entries(data).map(([key, val]) => (
                        <div key={key} className="break-words">
                            <h4 className="text-md font-semibold text-teal-600 dark:text-teal-400 capitalize mb-1 tracking-wide">
                                {key.replace(/([A-Z])/g, " $1")}
                            </h4>
                            <div className="pl-2 border-l-2 border-teal-300 dark:border-teal-700">
                                {renderData(val)}
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
                 bg-gradient-to-b from-cyan-50 to-white dark:from-gray-900 dark:to-gray-800  pt-40"
        >
            <ToasterComponent />

            <h1 className="text-5xl font-extrabold mb-12 drop-shadow-md text-teal-700 dark:text-teal-400">
                DNS Lookup Tool
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
                    aria-label="Lookup DNS"
                >
                    Lookup
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
                ) : dnsData ? (
                    renderData(dnsData)
                ) : (
                    <p className="text-center text-gray-400 italic select-none">
                        No data to display. Enter a domain and click Lookup.
                    </p>
                )}
            </div>
        </div>
    );
};

export default DnsLookUp;
