const db = require('../../database/models');

module.exports = (req,res) => {

    const id = req.params.id;

    const product = db.Product.findByPk(id, {
        include : {
            all : true
        }
    });
    const categories = db.Product.findAll({
        order : ['name']
    });
    
    Promise.all([product, categories])
        .then(([product, categories]) => {
            return res.render('productEdit', {
                categories,
                ...product?.dataValues
            });
        })
        .catch(error => console.log(error))
}