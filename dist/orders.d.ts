import { AxiosInstance } from "axios";
import { Result } from "./types/common";
import { Document } from "./types";
declare const createOrder: (apiClient: AxiosInstance, data: Partial<Document>) => Promise<Result<Document>>;
declare const listOrders: (apiClient: AxiosInstance) => Promise<Result<Document>>;
declare const getOrder: (apiClient: AxiosInstance, id: string) => Promise<Document>;
export { createOrder, listOrders, getOrder };
