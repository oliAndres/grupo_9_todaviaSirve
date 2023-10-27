const db = require('../../database/models');

module.exports = (req,res) => {

    const id = req.params.id;

    const product = db.Product.findByPk(id, {
        include : {
            all : true
        }
    });
    const categories = db.Category.findAll({
        order : ['name']
    });
    const brands = db.Brand.findAll({
        order : ['name']
    });
    
    Promise.all([product, categories, brands])
        .then(([product, categories, brands]) => {
            //return res.send(product)
            return res.render('productEdit', {
                categories,
                brands,
                ...product?.dataValues
            });
        })
        .catch(error => console.log(error))
}