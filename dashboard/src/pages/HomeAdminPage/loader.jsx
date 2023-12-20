import { getAllCategory } from "../../services/category.services"
import { totalProductInDB } from "../../services/product.services";

export const loader = async () => {
    try {

        const {data : categories} = await getAllCategory();
        const {data : totalProducts} = await totalProductInDB();

        return {
            categories,
            totalProducts
        }
        
    } catch (error) {
        console.error
    }
}