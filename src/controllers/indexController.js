const products= require('../data/products.json');

module.exports = {
    index : (req,res) => {
        console.log(req.session.userLogin)
         res.render('index',{
            products
        
        });
    }
};