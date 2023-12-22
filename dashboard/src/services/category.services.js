import { UseFetch } from "../hooks/UseFetch"

export const getAllCategory = async () => {
    try {
        const response = await UseFetch('categories');
        return response;
    } catch (error) {
        console.error(error);
        throw error;
    }
};