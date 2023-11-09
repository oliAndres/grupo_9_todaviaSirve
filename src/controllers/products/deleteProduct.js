const db = require('../../database/models');

async function deleteProduct(req, res) {
    try {
        const productId = parseInt(req.params.id);
        const product = await db.Product.findByPk(productId);

        if (!product) {
            return res.status(404).json({ error: 'Producto no encontrado' });
        }

        return res.render('productsDelete', { product });
    } catch (error) {
        console.error('Error al cargar la página de eliminación del producto:', error);
        return res.status(500).json({ error: 'Error interno del servidor' });
    }
}

module.exports = deleteProduct;
