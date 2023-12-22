import { UseFetch } from "../hooks/UseFetch";

export const totalProductInDB = async () => {
    try {
        const response = await UseFetch('products/count');
        return response;
    } catch (error) {
        console.error(error);
        throw error;
    }
};

export const getAllProducts = async () => {
    try {
        const response = await UseFetch('products');
        return response;
    } catch (error) {
        console.error(error);
        throw error;
    }
}


export const deleteProduct = async (id) => {
    try {
        const response = await UseFetch(`products/${id}`, "DELETE", null);
        return response;
    } catch (error) {
        console.error(error);
        throw error;
    }
}
