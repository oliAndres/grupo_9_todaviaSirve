const { existsSync, unlinkSync } = require('fs');
const db = require('../../database/models');
const { validationResult } = require('express-validator');

module.exports = async (req, res) => {
    try {
        const errors = validationResult(req);

        if (errors.isEmpty()) {
            const { name, brandId, price, categoryId, description } = req.body;
            const productId = req.params.id;

            // Verifica que el producto existe antes de intentar actualizar
            const product = await db.Product.findByPk(productId, {
                include: ['images']
            });

            if (!product) {
                return res.status(404).send('Producto no encontrado');
            }

            // Actualiza el producto
            await db.Product.update(
                {
                    name: name.trim(),
                    brandId: brandId,
                    price,
                    categoryId: categoryId,
                    description
                },
                {
                    where: {
                        id: productId
                    }
                }
            );

            // Cambia imágenes secundarias
            if (req.files.images) {
                product.images.filter(image => !image.main).forEach((image) => {
                    existsSync(`./public/images/productos/${image.name}`) && 
                    unlinkSync(`./public/images/productos/${image.name}`);
                });

                await db.Image.destroy({
                    where: {
                        productId: req.params.id,
                        main: false
                    }
                });

                const images = req.files.images.map(({ filename }) => {
                    return {
                        name: filename,
                        main: false,
                        productId: product.id
                    };
                });

                await db.Image.bulkCreate(images, {
                    validate: true
                });
            }
        } else {
            const id = req.params.id;

            const product = await db.Product.findByPk(id, {
                include: {
                    all: true
                }
            });

            const categories = await db.Product.findAll({
                order: ['name']
            });
            const brands = await db.Brand.findAll({
                order :['name']
            });


            return res.render('productEdit', {
                categories,
                product,
                brands,
                errors: errors.mapped()
            });
        }

        return res.redirect("/admin");
    } catch (error) {
        console.error('Error en la edición del producto:', error);
        return res.status(500).send('Error interno del servidor');
    }
};
