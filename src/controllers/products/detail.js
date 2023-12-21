
const { Product, Image } = require('../../database/models');

module.exports = async (req, res) => {
  const idParam = parseInt(req.params.id);

  try {
    const prodFind = await Product.findByPk(idParam, {
      include: [{ model: Image, as: 'images' }]
    });

    if (!prodFind) {
      res.status(404).send('Producto no encontrado');
    }

    const relatedProducts = await Product.findAll({
      where : {
        categoryId : prodFind.categoryId
      },  
      include: [{ model: Image, as: 'images' }]
    }
    
  )

    return res.render('productDetail', { prodfind: prodFind, relatedProducts: relatedProducts });

  } catch (error) {
    res.status(500).send('Error en el servidor');
  }
};
