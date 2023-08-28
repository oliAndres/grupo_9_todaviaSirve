
const products= require('../data/products.json');


module.exports = {
    admin : (req,res) => {
     res.render('admin',{
        products:products
     });
    }
 
}