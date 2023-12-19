const db = require("../../database/models");
const brands = require("../../database/models//brand");

module.exports = async (req, res) => {
  try {
    const brands = await db.Brand.findAll();
    /*res.send(categories)*/
    res.render('brandAdd', {brands});
  } catch (error) {
    console.error('Error:', error);
    res.status(500).send('Error');
  }
}