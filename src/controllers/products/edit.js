const db = require('../../database/models');

module.exports = async (req, res) => {
    try {
        
        const id = req.params.id;

        // Utiliza await para esperar que la promesa se resuelva
        const product = await db.Product.findByPk(id, {


            include: {
                all: true
            }
        });
        console.log(product);

        if (!product) {
            // Manejo si el producto no se encuentra
            return res.status(404).send('Producto no encontrado');
        }

        const categories = await db.Category.findAll({
            order: ['name']
        });

        const brands = await db.Brand.findAll({
            order: ['name']
        });

        // Renderiza la vista después de obtener todos los datos
        return res.render('productEdit', {
            categories,
            brands,
            product
        });
    } catch (error) {
        console.error('Error al obtener datos del producto:', error);
        return res.status(500).send('Error interno del servidor');
    }
};
