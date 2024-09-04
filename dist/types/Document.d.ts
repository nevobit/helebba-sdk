import { Base } from "./common";
export declare const getStatusDocument: (status: number) => "Pendiente de pago" | "Pagada" | "Pago parcial" | "Cancelada";
export declare enum StatusDocument {
    Pending = 0,
    Paid = 1,
    PartiallyPaid = 2,
    Cancelled = 3
}
export interface Document extends Base {
    id: string;
    account: string;
    contact: string;
    contactName: string;
    desc: string;
    date: string;
    dueDate: string;
    notes: string;
    products: Partial<ProductDocument>[];
    tax: number;
    subtotal: number;
    discount: number;
    total: number;
    language: string;
    statusDocument: number;
    warehouseId: string;
    paymentMethod: string;
    designId: string;
    docType: DocumentType | string;
    customFields: CustomField[];
    docNumber: string;
    currency: string;
    currencyChange: number;
    paymentsTotal: number;
    paymentsPending: number;
    paymentsRefunds: number;
    salesChannelId: string;
}
export interface ProductDocument {
    id: string;
    concept: string;
    description: string;
    sku?: string;
    price: number;
    amount: number;
    tax: number;
    productId: string;
    discount?: number;
    weight?: number;
    costPrice?: number;
}
interface CustomField {
    field: string;
    value: string;
}
export {};
