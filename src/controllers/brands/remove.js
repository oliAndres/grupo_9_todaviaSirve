const db = require("../../database/models");
const { existsSync, unlinkSync } = require("fs");

module.exports = async (req, res) => {
    const {id} = req.params;
  try {
    const brandToDelete = await db.Brand.findByPk(id);

    if(brandToDelete){
        existsSync(`./public/images/brand/${brandToDelete.image}`) &&
        unlinkSync(`./public/images/brand/${brandToDelete.image}`);
        brandToDelete.destroy();

        return res.redirect('/brands')
    }
    
  } catch (error) {
    console.error('Error:', error);
    res.status(500).send('Error');
  }
}