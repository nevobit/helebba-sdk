import { Base } from "./common";
export declare enum ProductStockState {
    OutOfStock = 0,
    InStock = 1,
    Reserved = 2,
    LowStock = 3,
    MediumStock = 4,
    HighStock = 5,
    CriticalStock = 6,
    InTransit = 7,
    TemporarilyOutOfStock = 8,
    DefectiveStock = 9,
    PendingReview = 10
}
export declare function getStockStateText(state: ProductStockState): string;
export interface ProductVariant {
    id?: string;
    barcode: string;
    sku: string;
    factoryCode: string;
    price: number;
    cost: number;
    weight: number;
    purchasePrice: number;
    stock: number;
    variantId?: string;
}
interface Note {
    title: string;
    color: string;
    content: string;
}
export interface ProductRate {
    id: string;
    name: string;
    price?: number;
    tax?: number;
}
export interface Product extends Base {
    kind: string;
    name: string;
    desc: string;
    typeId: string;
    contactId: string;
    account: string;
    contactName: string;
    price: number;
    tax: number;
    total: number;
    rates: ProductRate[];
    hasStock: number;
    stock: number;
    barcode: string;
    sku: string;
    inCatalog: boolean;
    cost: number;
    notes: Note[];
    purchasePrice: number;
    purchaseTax: number;
    weight: number;
    tags: string[];
    images: string[];
    categoryId: string;
    factoryCode: string;
    forSale: number;
    forPurchase: number;
    salesChannelId: string;
    expAccountId: string;
    warehouseId: string;
    variants: ProductVariant[];
}
export {};
