import { Contact, Document } from "./types";
export declare const helebbaClient: (secretKey: string) => {
    listProducts: () => Promise<import("./types").Result<import("./types").Product>>;
    getProduct: (slug: string) => Promise<import("./types").Product>;
    listCategories: () => Promise<import("./types").Result<import("./types").Category>>;
    getCategory: (slug: string) => Promise<import("./types").Category>;
    listOrders: () => Promise<import("./types").Result<Document>>;
    getOrder: (id: string) => Promise<Document>;
    createOrder: (data: Partial<Document>) => Promise<import("./types").Result<Document>>;
    listContacts: () => Promise<import("./types").Result<Contact>>;
    getContact: (id: string) => Promise<Contact>;
    createContact: (data: Partial<Contact>) => Promise<import("./types").Result<Contact>>;
};
export * from './types';
