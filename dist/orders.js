const createOrder = async (apiClient, data) => {
    try {
        const { data: returnData } = await apiClient.post("/documents/sales-order", data);
        return returnData;
    }
    catch (err) {
        throw new Error(err);
    }
};
const listOrders = async (apiClient) => {
    try {
        const { data } = await apiClient.get("/documents/sales-order");
        return data;
    }
    catch (err) {
        throw new Error(err);
    }
};
const getOrder = async (apiClient, id) => {
    try {
        const { data } = await apiClient.get(`/documents/sales-order/${id}`);
        return data;
    }
    catch (err) {
        throw new Error(err);
    }
};
export { createOrder, listOrders, getOrder };
