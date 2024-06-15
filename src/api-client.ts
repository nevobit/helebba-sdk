import axios, { AxiosInstance } from "axios";
import { apiUrl } from "./config";

export const createApiClient = (token: string, apikey: string, account: string): AxiosInstance => {
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
} 