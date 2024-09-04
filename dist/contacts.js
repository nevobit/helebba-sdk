const createContact = async (apiClient, data) => {
    try {
        const { data: returnData } = await apiClient.post("/contacts", data);
        return returnData;
    }
    catch (err) {
        throw new Error(err);
    }
};
const listContacts = async (apiClient) => {
    try {
        const { data } = await apiClient.get("/contacts");
        return data;
    }
    catch (err) {
        throw new Error(err);
    }
};
const getContact = async (apiClient, id) => {
    try {
        const { data } = await apiClient.get(`/contacts/${id}`);
        return data;
    }
    catch (err) {
        throw new Error(err);
    }
};
export { createContact, listContacts, getContact };
