export declare const helebbaClient: (secretKey: string) => {
    listProducts: () => Promise<import("./types/common").Result<import("./types/Product").Product>>;
    getProduct: (productId: string) => Promise<import("./types/Product").Product>;
};
