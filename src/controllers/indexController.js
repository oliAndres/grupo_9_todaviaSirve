const db = require('../database/models')

module.exports = {
    index : (req,res) => {   
        
        db.Product.findAll({
            include : ['images']
        })
            .then(products => {
                
                return res.render('index', {
                    products,
                    productsCarousel : []
        
                })
            })
            .catch(error => console.log(error))
    },
    admin : (req,res)  => {

        db.Product.findAll({
            include : ['images']
        })
            .then(products => {
                return res.render('index', {products})
            }).catch(error => console.log(error))
        
        
    }
};
