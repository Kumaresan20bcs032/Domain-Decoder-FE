import { useState, useEffect } from "react";
import { getDnsLookUpInformation } from "../Services/apiService";
import { ClipLoader } from "react-spinners";
import { successToaster, errorToaster } from "../Services/toaster";
import { useSearchParams } from "react-router";
import ToasterComponent from "../Components/ToasterComponent";

const DnsLookUp = () => {
    const [color] = useState("#36d7b7");
    const [loader, setLoader] = useState(false);
    const [dnsData, setDnsData] = useState({});
    const [host, setHost] = useState("");
    const [searchParams, setSearchParams] = useSearchParams();

    useEffect(() => {
        const hostParam = searchParams.get("host");
        if (hostParam) {
            setHost(hostParam);
            fetchDnsData(hostParam, false);
        }
    }, []);


    const fetchDnsData = async (hostValue, isToaster = true) => {
        setLoader(true);
        try {
            const dnsData = await getDnsLookUpInformation({ host: hostValue });
            if (isToaster) {
                successToaster(dnsData.message || "Data fetched successfully");
            }
            setDnsData(dnsData.data);
        } catch (error) {
            errorToaster(error.message || "Something went wrong");
        } finally {
            setLoader(false);
        }
    };

    const handleSearch = () => {
        if (!host.trim()) {
            errorToaster("Please enter a host/domain.");
            return;
        }
        setSearchParams({ host });
        fetchDnsData(host, true);
    };

    return (
        <div className="min-h-screen flex flex-col items-center justify-start bg-gray-50 py-16 px-4">
            <ToasterComponent />

            <h1 className="text-3xl font-bold mb-8 text-gray-900">
                DNS Lookup Tool
            </h1>

            <div className="flex flex-col sm:flex-row gap-4 w-full max-w-xl mb-8">
                <input
                    type="text"
                    placeholder="Enter domain (e.g., www.example.com)"
                    value={host}
                    onChange={(e) => setHost(e.target.value)}
                    onKeyDown={(e) => e.key === "Enter" && handleSearch()}
                    className="flex-grow p-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                    aria-label="Domain Input"
                />
                <button
                    onClick={handleSearch}
                    className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-md shadow-md transition"
                    aria-label="Lookup DNS"
                >
                    Lookup
                </button>
            </div>

            <div className="w-full max-w-4xl bg-white rounded-md shadow-md p-6 overflow-x-auto min-h-[200px]">
                {loader ? (
                    <div className="flex justify-center items-center h-40">
                        <ClipLoader color={color} loading={loader} size={50} />
                    </div>
                ) : (
                    <pre className="whitespace-pre-wrap text-sm text-gray-700">
                        {Object.keys(dnsData).length > 0
                            ? JSON.stringify(dnsData, null, 2)
                            : "No data to display. Enter a domain and click Lookup."}
                    </pre>
                )}
            </div>
        </div>
    );
};

export default DnsLookUp;
