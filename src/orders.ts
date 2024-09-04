import { AxiosInstance } from "axios"
import { Result } from "./types/common";
import { Document } from "./types";

const createOrder = async (apiClient: AxiosInstance, data: Partial<Document>): Promise<Result<Document>> => {
    try{
        const { data: returnData } = await apiClient.post<Result<Document>>("/documents/sales-order", data);
        return returnData;
    }catch(err: any){
        throw new Error(err);
    }
}

const listOrders = async (apiClient: AxiosInstance): Promise<Result<Document>> => {
    try{
        const { data } = await apiClient.get<Result<Document>>("/documents/sales-order")
        return data;
    }catch(err: any){
        throw new Error(err);
    }
}


const getOrder = async (apiClient: AxiosInstance, id: string): Promise<Document> => {
    try{
        const { data } = await apiClient.get<Document>(`/documents/sales-order/${id}`)
        return data;
    }catch(err: any){
        throw new Error(err);
    }

}

export {
    createOrder,
    listOrders,
    getOrder
};