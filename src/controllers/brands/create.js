const db = require("../../database/models");

module.exports = async (req, res) => {
  try {
  
    const {name} = req.body;
    const brand= await db.Brand.create({
        name: name,
        image: req.file ? req.file.filename : null
    });
console.log()
    return res.redirect('/brands');

  } catch (error) {
    console.error('Error:', error);
    res.status(500).send('Error');
  }
}