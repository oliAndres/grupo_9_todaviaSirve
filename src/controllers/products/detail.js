
const { Product, Image } = require('../../database/models');

module.exports = async (req, res) => {
  const idParam = parseInt(req.params.id);

  try {
    const prodFind = await Product.findByPk(idParam, {
      include: [{ model: Image, as: 'images' }]
    });

    if (prodFind) {
      return res.render('productDetail', { prodfind: prodFind });    
    } else {
      res.status(404).send('Producto no encontrado');
    }
  } catch (error) {
    res.status(500).send('Error en el servidor');
  }
};