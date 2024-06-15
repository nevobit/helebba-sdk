import { createApiClient } from "./api-client"
import {getProduct, listProducts} from "./products";
import { sign } from "jsonwebtoken";
import { createDecipheriv,  } from 'crypto';
const algorithm = 'aes-256-cbc';
const iv = Buffer.from("9823456789012345"); // Vector de inicialización aleatorio (debe ser único y no secreto)
const encryptionKey = 'rKj4QCR87i2N8FWunWmJR2iZmdivdzrG'; // Deberías almacenar esto de forma segura

const JWT_SECRET = "eyJhbGciOiJIUzI1NiJ9.eyJSb2xlIjoiQWRtaW4iLCJJc3N1ZXIiOiJJc3N1ZXIiLCJVc2VybmFtZSI6IkphdmFJblVzZSIsImV4cCI6MTcxMDE5NDAxMCwiaWF0IjoxNzEwMTk0MDEwfQ.GMyEO-pOzdCIVg26ByIYb_MNuV4G3dh2u2K0xfwjyco"

export const helebbaClient = (secretKey: string) => {
    const info = getInfoFromSecretKey(secretKey);

    const generateAuthToken = () => {
        const token = sign({id: info.userId}, JWT_SECRET!, {expiresIn: '15d'});
        return token;
    }

    const token = generateAuthToken();

    const apiClient = createApiClient(token, info.apiKey, info.accountId);

    return {
       listProducts: async () => listProducts(apiClient),
       getProduct: async (productId: string) => getProduct(apiClient, productId)
    }
}

const getInfoFromSecretKey = (secretKey: string) => {
    try {
        const decipher = createDecipheriv(algorithm, Buffer.from(encryptionKey), iv);

        let decrypted = decipher.update(secretKey, 'hex', 'utf8');
        decrypted += decipher.final('utf8');

        return JSON.parse(decrypted);
    } catch (error) {
        console.error('Error al descifrar la información:', error);
        return null;
    }
}