import axios from "axios";

const commonApi = async (httpMethod, url, reqBody, reqHeader = {}) => {
    const token = sessionStorage.getItem("token");
    
    const reqConfig = {
        method: httpMethod,
        url,
        data: reqBody,
        headers: {
            "Content-Type": "application/json",
            "Authorization": token ? `Bearer ${token}` : ""
        }
    };

    // console.log("Final Request Headers:", reqConfig.headers);
    // console.log("final request Body", reqBody)

    try {
        const response = await axios(reqConfig);
        return response;
    } catch (error) {
        console.error("API Error:", error.response?.data || error.message);
        throw error;
    }
};


export default commonApi;

