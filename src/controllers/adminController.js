const db = require('../database/models')

module.exports = {
    admin : (req,res) => {

        const products = db.Product.findAll();
        const categories = db.Category.findAll();
        const users = db.User.findAll();

        Promise.all([products,categories,users])
            .then(([products,categories,users]) => {
                return res.render('admin',{
                    products,
                    categories,
                    users
                });
            })
            .catch(error => console.log(error))
        
    }
 
}