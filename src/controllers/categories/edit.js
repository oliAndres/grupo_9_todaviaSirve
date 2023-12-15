const db = require('../../database/models');

module.exports = async (req, res) => {
    const { id } = req.params;

    try {
      const category = await db.Category.findByPk(id);
      return res.render('categoryEdit',{
        category
      })

    } catch (error) {
      console.error('Error:', error);
      res.status(500).send('Error');
    } 
}