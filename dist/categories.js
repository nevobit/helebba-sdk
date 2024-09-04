const listCategories = async (apiClient) => {
    try {
        const { data } = await apiClient.get("/categories");
        return data;
    }
    catch (err) {
        throw new Error(err);
    }
};
const getCategory = async (apiClient, slug) => {
    try {
        const { data } = await apiClient.get(`/categories/slug/${slug}`);
        return data;
    }
    catch (err) {
        throw new Error(err);
    }
};
export { listCategories, getCategory };
