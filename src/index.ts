import { createApiClient } from "./api-client"
import {listProducts} from "./products";

export const helebbaClient = (apiKey: string) => {
    const apiClient = createApiClient(apiKey);

    return {
       listProducts: async () => listProducts(apiClient)
    }
}