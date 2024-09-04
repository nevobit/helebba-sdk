import { AxiosInstance } from "axios"
import { Product } from "./types/Product";
import { Result } from "./types/common";

const listProducts = async (apiClient: AxiosInstance): Promise<Result<Product>> => {
    try{
        const { data } = await apiClient.get<Result<Product>>("/products")
        return data;
    }catch(err: any){
        throw new Error(err);
    }
}


const getProduct = async (apiClient: AxiosInstance, slug: string): Promise<Product> => {
    try{
        const { data } = await apiClient.get<Product>(`/products/slug/${slug}`)
        return data;
    }catch(err: any){
        throw new Error(err);
    }

}


export {
    listProducts,
    getProduct
};