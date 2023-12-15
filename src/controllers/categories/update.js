const db = require('../../database/models')

module.exports = async (req, res) => {
    const {id} = req.params;
    const {name} = req.body;
    try {
      const category = await db.Category.findByPk(id);
      
      category.name = name;
      category.image = req.file ? req.file.filename : category.image;
      
      await category.save();
      return res.redirect('/categories')

    } catch (error) {
      console.error('Error:', error);
      res.status(500).send('Error');
    } 
}