const db = require('../../database/models');

module.exports = async (req, res) => {
  try {
    const categories = await db.Category.findAll();
    const brands = await db.Brand.findAll();
    res.render('productAdd', { allCategories: categories, brands });
  } catch (error) {
    console.error('Error:', error);
    res.status(500).send('Error retrieving categories and brands');
  }
};
