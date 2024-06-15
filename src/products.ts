import { AxiosInstance } from "axios"

const listProducts = async (apiClient: AxiosInstance) => {
    try{
        const { data } = await apiClient.get("/products")
        return data;
    }catch(err){
        throw new Error(err);
    }

}

export {
    listProducts
};