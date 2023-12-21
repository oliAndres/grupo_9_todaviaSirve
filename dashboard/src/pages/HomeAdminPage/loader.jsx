import { totalProductInDB } from "../../services/product.services";

export const loader = async () => {
    try {
        const {data : totalProducts} = await totalProductInDB();

        return {
            totalProducts
        }
        
    } catch (error) {
        console.error
    }
}