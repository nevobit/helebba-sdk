import { AxiosInstance } from "axios";
declare const listProducts: (apiClient: AxiosInstance) => Promise<any>;
declare const getProduct: (apiClient: AxiosInstance, productId: string) => Promise<any>;
export { listProducts, getProduct };
