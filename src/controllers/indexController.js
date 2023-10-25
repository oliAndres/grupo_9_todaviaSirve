const db = require('../database/models');
const products = require('../data/products.json');

module.exports = {
  index: (req, res) => {
    console.log(req.session.userLogin);

    db.Product.findAll({
      include: {
        model: db.Image,
        as: 'images', // Debe coincidir con el alias en la definición de la asociación
      },
    })
      .then((products) => {
        res.render('index.ejs', { products });
      })
      .catch((error) => console.log(error));
  },
};


// module.exports = {
//     admin: (req, res) => {
//         db.Product.findAll()
//             .then(products => {
//                 res.render('admin.ejs', {products})
//             })
    
//         }
    
// } 