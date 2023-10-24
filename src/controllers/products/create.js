const db = require('../../database/models');


const create = async (req, res) => {
    try {
      const product = await db.Product.create(req.body);
      console.log(product);
      res.redirect('/admin'); 
    } catch (error) {
      console.error('Error:', error);
      res.status(500).send('Error al crear el producto');
    }
  };
  
  module.exports = create;