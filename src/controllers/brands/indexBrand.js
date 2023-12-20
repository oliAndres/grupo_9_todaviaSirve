const db = require("../../database/models");

module.exports = async (req, res) => {
  try {
    const brands = await db.Brand.findAll();
    /*res.send(brands)*/
    res.render('brand', {brands});
  } catch (error) {
    console.error('Error:', error);
    res.status(500).send('Error');
  }
}