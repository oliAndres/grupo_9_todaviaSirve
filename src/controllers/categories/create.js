const db = require("../../database/models");

module.exports = async (req, res) => {
  try {
  
    const {name} = req.body;
    const category= await db.Category.create({
        name: name,
        image: req.file ? req.file.filename : null
    });
console.log(category)
    return res.redirect('/categories');

  } catch (error) {
    console.error('Error:', error);
    res.status(500).send('Error');
  }
}