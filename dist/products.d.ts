import { AxiosInstance } from "axios";
import { Product } from "./types/Product";
import { Result } from "./types/common";
declare const listProducts: (apiClient: AxiosInstance) => Promise<Result<Product>>;
declare const getProduct: (apiClient: AxiosInstance, slug: string) => Promise<Product>;
export { listProducts, getProduct };
