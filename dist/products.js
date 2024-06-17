const listProducts = async (apiClient) => {
    try {
        const { data } = await apiClient.get("/products");
        return data;
    }
    catch (err) {
        throw new Error(err);
    }
};
const getProduct = async (apiClient, productId) => {
    try {
        const { data } = await apiClient.get(`/products/slug/${productId}`);
        return data;
    }
    catch (err) {
        throw new Error(err);
    }
};
export { listProducts, getProduct };
