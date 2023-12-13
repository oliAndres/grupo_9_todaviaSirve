const db = require("../../database/models");

module.exports = async (req, res) => {
    try {
      const categories = await db.Category.findAll();
      res.render('category', { categories});
    } catch (error) {
      console.error('Error:', error);
      res.status(500).send('Error retrieving categories');
    }
  };
