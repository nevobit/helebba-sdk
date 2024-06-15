import { helebbaApi } from "@/api";

interface Props {
    email: string;
    password: string;
}

export const loginApi = async ({ email, password }: Props) => {
    const { data } = await helebbaApi.post(`/login`, { email, password });
    const { token } = data;
    localStorage.setItem('token', JSON.stringify(token));
    return data;
};

export const loginGoogle = async (token_id: string) => {
    const { data } = await helebbaApi.post("/login-google", token_id);
    const { token } = data;
    localStorage.setItem('token', JSON.stringify(token));
    return { data }
}
