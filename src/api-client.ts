import axios, { AxiosInstance } from "axios";
import { apiUrl } from "./config";
import crypto from 'crypto-js';

const generateSignature = (url: string, apiKey:string, body: string, timestamp: number) => {
    const dataToSign = `${url}|${body}|${timestamp}`;
    return crypto.HmacSHA256(dataToSign, apiKey).toString();
};

export const createApiClient = (token: string, apikey: string, account: string): AxiosInstance => {

    const timestamp = (Date.now() / 1000);
    const fullUrl = `http://helebba-sdk.com`;
    const bodyString = JSON.stringify('');
    const signature = generateSignature(fullUrl, apikey, bodyString.replace(/^['"]|['"]$/g, ''), timestamp);

    const client = axios.create({
        baseURL: apiUrl,
        headers: {
            "api-key": apikey,
            'X-Timestamp': timestamp.toString(),
            'X-Signature': signature,
            "X-Path": fullUrl,
            "account": account,
            "Authorization": `Bearer ${token}`,
            "Content-Type": "application/json"
        }
    });

    return client;
} 