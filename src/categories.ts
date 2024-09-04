import { AxiosInstance } from "axios"
import { Result } from "./types/common";
import { Category } from "./types";

const listCategories = async (apiClient: AxiosInstance): Promise<Result<Category>> => {
    try{
        const { data } = await apiClient.get<Result<Category>>("/categories")
        return data;
    }catch(err: any){
        throw new Error(err);
    }
}


const getCategory = async (apiClient: AxiosInstance, slug: string): Promise<Category> => {
    try{
        const { data } = await apiClient.get<Category>(`/categories/slug/${slug}`)
        return data;
    }catch(err: any){
        throw new Error(err);
    }

}


export {
    listCategories,
    getCategory
};