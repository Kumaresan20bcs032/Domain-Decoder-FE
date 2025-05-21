import axios from "axios";
import EnvVariables from "./envConfig";
const { API_URL } = EnvVariables;

/**
 * @returns  This function handles the get information domain related information
 */
export const getDnsLookUpInformation = async (params = {}) => {
    try {

        // construct the query-string to pass dynamin search params to get the data.
        const queryString = new URLSearchParams(params).toString();
        const url = `${API_URL}/dns-lookup?${queryString}`
        const dnslookUpInformation = await axios.get(url)
        return dnslookUpInformation.data;
    }
    catch (error) {
        throw error?.response?.data || error;
    }
}

/**
 * @returns  This function handles the get ssl related information
 */
export const getSslViewerInformation = async (params = {}) => {
    try {

        // construct the query-string to pass dynamin search params to get the data.
        const queryString = new URLSearchParams(params).toString();
        const url = `${API_URL}/host-ssl-information?${queryString}`
        const sslViewerInformation = await axios.get(url)
        return sslViewerInformation.data;
    }
    catch (error) {
        throw error?.response?.data || error;
    }
}
