export declare const helebbaClient: (secretKey: string) => {
    listProducts: () => Promise<any>;
    getProduct: (productId: string) => Promise<any>;
};
