const db = require('../../database/models');


const create = async (req, res) => {

  return res.send(req.body)
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