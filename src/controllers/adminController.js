const db = require('../database/models');

module.exports = {
    admin: (req, res) => {
        db.Product.findAll({
            include: ['category', 'section', 'images'],
        })
            .then(products => {
                res.render('admin', { products });
            })
            .catch(error => console.log(error));
    },
};
