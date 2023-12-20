import { UseFetch } from "../hooks/UseFetch"

export const getAllCategory = async () => {
    try {

       return UseFetch('categories')
        
    } catch (error) {
        console.error
    }
}