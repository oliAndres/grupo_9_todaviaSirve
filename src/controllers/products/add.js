const db = require('../../database/models');

module.exports = (req, res) => {
  db.Category.findAll()
    .then(function (allCategories) {
      res.render('productAdd', { allCategories });
    })
    .catch(function (error) {
      console.error('Error:', error);
      res.status(500).send('Error retrieving categories');
    });
}

