const  paginate = require('express-paginate');
const { getAllProducts, getProductById } = require("../services/products.services")

module.exports = {
    listProducts : async(req,res) => {
        try {
            const {total, products} = await getAllProducts(req.query.limit, req.skip);

            const pagesCount = Math.ceil(total / req.query.limit);
            const currentPage = req.query.page;
            const pages = paginate.getArrayPages(req)(pagesCount,pagesCount,currentPage);
            
            return res.status(200).json({
                ok : true,
                
                data : products.map(product => {
                    return {
                         ...product.dataValues,
                         url : `${req.protocol}://${req.get('host')}/api/products/${product.id}`
                    }
                }),
                meta : {
                    total,
                    pagesCount,
                    currentPage,
                    pages
                },
            })
        } catch (error) {
            return res.status(error.status || 500).json({
                ok : false,
                status : error.status || 500,
                error : error.message || 'Hubo un error'
            })
        }
    },
    showProduct : async (req,res) => {
        try {
            const product = await getProductById(req.params.id)

            return res.status(200).json({
                ok : true,
                data : product
            })

        } catch (error) {
            return res.status(error.status || 500).json({
                ok : false,
                status : error.status || 500,
                error : error.message || 'Hubo un error'
            })
        }
    },
    createProduct : async (req,res) => {
        try {
            
        } catch (error) {
            
        }
    },
    updateProduct : async (req,res) => {
        try {
            
        } catch (error) {
            
        }
    },
    deleteProduct : async(req,res) => {
        try {
            
        } catch (error) {
            
        }
    }
}