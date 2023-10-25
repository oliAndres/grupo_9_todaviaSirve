const db = require('../../database/models');

module.exports = (req, res) => {
  const categories = db.Category.findAll()
  const brands = db.Brand.findAll()
  Promise.all([categories, brands])
    .then(function ([categories, brands]) {
      return res.render('productAdd', { allCategories : categories, brands });
    })
    .catch(function (error) {
      console.error('Error:', error);
      res.status(500).send('Error retrieving categories');
    });
}

