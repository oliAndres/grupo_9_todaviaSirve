const db = require("../database/models");
const paginate = require('express-paginate');

module.exports = {
    admin: async (req, res) => {
        try {
            const products = await db.Product.findAll({
                include: [
                    {
                        model: db.Brand,
                        as: 'brand',
                    },
                    {
                        model: db.Category,
                        as: 'category',
                    }
                ],
                limit : req.query.limit,
                offset : req.skip
            });

            const count = await db.Product.count();
            const pagesCount = Math.ceil(count / req.query.limit);
            const currentPage = req.query.page;
            const pages = paginate.getArrayPages(req)(pagesCount,pagesCount,currentPage);
            
            return res.render('admin', { 
                products,
                paginate,
                pagesCount,
                currentPage,
                pages
            });
        } catch (error) {
            console.error('Error al recuperar productos:', error);
            res.status(500).json({ error: 'Error interno del servidor' });
        }
    }
}
