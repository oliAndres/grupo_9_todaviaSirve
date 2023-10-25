const db = require("../database/models");

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
                ]
            });
            res.render('admin', { products });
        } catch (error) {
            console.error('Error al recuperar productos:', error);
            res.status(500).json({ error: 'Error interno del servidor' });
        }
    }
};


