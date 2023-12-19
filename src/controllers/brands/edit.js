const db = require('../../database/models');

module.exports = async (req, res) => {
    const { id } = req.params;

    try {
      const brand = await db.Brand.findByPk(id);
      
      return res.render('brandEdit',{
        brand
      })

    } catch (error) {
      console.error('Error:', error);
      res.status(500).send('Error');
    } 
}