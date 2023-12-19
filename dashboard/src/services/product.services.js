import { UseFetch } from "../hooks/UseFetch"

export const totalProductInDB = async () => {
    try {

        return await UseFetch('products/count')
        
    } catch (error) {
        console.error
    }
}

export const getAllProducts = async () => {
    try {

        return await UseFetch('products/count')
        
    } catch (error) {
        console.error
    }
}

export const createProduct = async (formValues) => {
    try {

        return await UseFetch(`products`, "POST", formValues);
        
    } catch (error) {
        console.error
    }
}

export const updateProduct = async (formValues) => {
    try {

        return await UseFetch(
            `products/${formValues.id}`,
            "PUT",
            formValues
          );
        
    } catch (error) {
        console.error
    }
}

export const deleteProduct = async (id) => {
    try {

        return await UseFetch(
            `products/${id}`,
            "DELETE",
            null
          );
        
    } catch (error) {
        console.error
    }
}