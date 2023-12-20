const db = require("../../database/models");
const { existsSync, unlinkSync } = require("fs");

module.exports = async (req, res) => {
    const {id} = req.params;
  try {
    const categoryToDelete = await db.Category.findByPk(id);

    if(categoryToDelete){
        existsSync(`./public/images/category/${categoryToDelete.image}`) &&
        unlinkSync(`./public/images/category/${categoryToDelete.image}`);
        categoryToDelete.destroy();

        return res.redirect('/categories')
    }
    
  } catch (error) {
    console.error('Error:', error);
    res.status(500).send('Error');
  }
}