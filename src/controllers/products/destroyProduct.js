const db = require('../../database/models');
const fs = require('fs').promises; 
const path = require('path'); 

async function destroyProduct(req, res) {
    try {
        const productId = parseInt(req.params.id);
        const product = await db.Product.findByPk(productId);

        if (!product) {
            return res.status(404).json({ error: 'Producto no encontrado' });
        }


        const images = await db.Image.findAll({
            where: { productId },
        });

        await db.Product.destroy({ where: { id: productId } });

        for (const image of images) {
            if (image.name) {
                const imagePath = path.join(__dirname, '../../../public/images/productos', image.name);
                await fs.unlink(imagePath);
            }
            await image.destroy();
        }

        return res.redirect('/admin');
    } catch (error) {
        console.error('Error al eliminar el producto:', error);
        return res.status(500).json({ error: 'Error interno del servidor' });
    }
}

module.exports = destroyProduct;
