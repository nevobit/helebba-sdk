import axios from "axios";
import { apiUrl } from "./config";
export const createApiClient = (token, apikey, account) => {
    const client = axios.create({
        baseURL: apiUrl,
        headers: {
            "api-key": apikey,
            "account": account,
            "Authorization": `Bearer ${token}`,
            "Content-Type": "application/json"
        }
    });
    return client;
};
