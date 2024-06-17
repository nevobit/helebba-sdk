import { AxiosInstance } from "axios"
import { Product } from "./types/Product";
import { Result } from "./types/common";

const listProducts = async (apiClient: AxiosInstance): Promise<Result<Product>> => {
    try{
        const { data } = await apiClient.get("/products")
        return data;
    }catch(err: any){
        throw new Error(err);
    }
}


const getProduct = async (apiClient: AxiosInstance, productId: string): Promise<Product> => {
    try{
        const { data } = await apiClient.get(`/products/slug/${productId}`)
        return data;
    }catch(err: any){
        throw new Error(err);
    }

}


export {
    listProducts,
    getProduct
};