const {validationResult} = require('express-validator')
const db = require('../../database/models');

module.exports = async (req, res) => {
    const errors = validationResult(req);
    if(errors.isEmpty()){
        const id = req.params.id;
        const product = await db.Product.findByPk(id, {

            include: {
                all: true
            }
        });
               
        const categories = await db.Category.findAll({
            order: ['name']
        });

        const brands = await db.Brand.findAll({
            order: ['name']
        });

        return res.render('productEdit', {
            categories,
            brands,
            product
        })

    }else {
        return res.send(errors.mapped())
    }}
