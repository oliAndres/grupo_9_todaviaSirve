
const deleteProduct = async (req, res) => {
    try {
        const productId = parseInt(req.params.id);
        const product = await db.Product.findByPk(productId);

        if (!product) {
            return res.status(404).json({ error: 'Producto no encontrado' });
        }

        await product.destroy();
        return res.redirect("/admin");
    } catch (error) {
        console.error('Error al eliminar el producto:', error);
        return res.status(500).json({ error: 'Error interno del servidor' });
    }
};

module.exports = deleteProduct;
