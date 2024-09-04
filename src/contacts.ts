import { AxiosInstance } from "axios"
import { Result } from "./types/common";
import { Contact } from "./types";

const createContact = async (apiClient: AxiosInstance, data: Partial<Contact>): Promise<Result<Contact>> => {
    try{
        const { data: returnData } = await apiClient.post<Result<Contact>>("/contacts", data)
        return returnData;
    }catch(err: any){
        throw new Error(err);
    }
}

const listContacts = async (apiClient: AxiosInstance): Promise<Result<Contact>> => {
    try{
        const { data } = await apiClient.get<Result<Contact>>("/contacts")
        return data;
    }catch(err: any){
        throw new Error(err);
    }
}


const getContact = async (apiClient: AxiosInstance, id: string): Promise<Contact> => {
    try{
        const { data } = await apiClient.get<Contact>(`/contacts/${id}`)
        return data;
    }catch(err: any){
        throw new Error(err);
    }

}

export {
    createContact,
    listContacts,
    getContact
};