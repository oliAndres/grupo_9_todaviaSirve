const db = require('../../database/models')

module.exports = async (req, res) => {
    const {id} = req.params;
    const {name} = req.body;
    try {
      const brand = await db.Brand.findByPk(id);
      
      brand.name = name;
      brand.image = req.file ? req.file.filename : brand.image;
      
      await brand.save();
      return res.redirect('/brands')

    } catch (error) {
      console.error('Error:', error);
      res.status(500).send('Error');
    } 
}