import { AxiosInstance } from "axios";
import { Result } from "./types/common";
import { Contact } from "./types";
declare const createContact: (apiClient: AxiosInstance, data: Partial<Contact>) => Promise<Result<Contact>>;
declare const listContacts: (apiClient: AxiosInstance) => Promise<Result<Contact>>;
declare const getContact: (apiClient: AxiosInstance, id: string) => Promise<Contact>;
export { createContact, listContacts, getContact };
