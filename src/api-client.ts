import axios, { AxiosInstance } from "axios";
import { apiUrl } from "./config";

export const createApiClient = (apikey: string): AxiosInstance => {
    const client = axios.create({
        baseURL: apiUrl,
        headers: {
            "api-key": apikey,
            "Content-Type": "application/json"
        }
    });

    return client;
} 