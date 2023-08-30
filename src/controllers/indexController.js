const products= require('../data/products.json');

module.exports = {
    index : (req,res) => {
         res.render('index',{
            products
        });
    }
};