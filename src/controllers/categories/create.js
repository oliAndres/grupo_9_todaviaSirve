const db = require("../../database/models");
const categories = require("../../database/models/category");

module.exports = async (req, res) => {
  try {
    const categories = await db.Category.findAll();
    /*res.send(categories)*/
    res.render('categoryAdd', categories);
  } catch (error) {
    console.error('Error:', error);
    res.status(500).send('Error');
  }
}