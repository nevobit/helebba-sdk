import { createApiClient } from "./api-client"
import {getProduct, listProducts} from "./products";
import { sign } from "jsonwebtoken";
import { createDecipheriv,  } from 'crypto';
import { getCategory, listCategories } from "./categories";
import { createOrder, getOrder, listOrders } from "./orders";
import { Contact, Document } from "./types";
import { createContact, getContact, listContacts } from "./contacts";

const algorithm = 'aes-256-cbc';
const iv = Buffer.from("9823456789012345");
const encryptionKey = 'rKj4QCR87i2N8FWunWmJR2iZmdivdzrG';

const JWT_SECRET = "eyJhbGciOiJIUzI1NiJ9.eyJSb2xlIjoiQWRtaW4iLCJJc3N1ZXIiOiJJc3N1ZXIiLCJVc2VybmFtZSI6IkphdmFJblVzZSIsImV4cCI6MTcxMDE5NDAxMCwiaWF0IjoxNzEwMTk0MDEwfQ.GMyEO-pOzdCIVg26ByIYb_MNuV4G3dh2u2K0xfwjyco"

export const helebbaClient = (secretKey: string) => {
    const info = getInfoFromSecretKey(secretKey);

    const generateAuthToken = () => {
        const token = sign({id: info.userId}, JWT_SECRET!, {expiresIn: '15d'});
        return token;
    }

    const token = generateAuthToken();

    const apiClient = createApiClient(token, info.apiKey, info.accountId);

    return {
       listProducts: async () => listProducts(apiClient),
       getProduct: async (slug: string) => getProduct(apiClient, slug),
       listCategories: async () => listCategories(apiClient),
       getCategory: async (slug: string) => getCategory(apiClient, slug),
       listOrders: async () => listOrders(apiClient),
       getOrder: async (id: string) => getOrder(apiClient, id),
       createOrder: async (data: Partial<Document>) => createOrder(apiClient, data),
       listContacts: async () => listContacts(apiClient),
       getContact: async (id: string) => getContact(apiClient, id),
       createContact: async (data: Partial<Contact>) => createContact(apiClient, data),
    }
}

const getInfoFromSecretKey = (secretKey: string) => {
    try {
        const decipher = createDecipheriv(algorithm, Buffer.from(encryptionKey), iv);

        let decrypted = decipher.update(secretKey, 'hex', 'utf8');
        decrypted += decipher.final('utf8');

        return JSON.parse(decrypted);
    } catch (error) {
        console.error('Error al descifrar la información:', error);
        return null;
    }
}

export * from './types';