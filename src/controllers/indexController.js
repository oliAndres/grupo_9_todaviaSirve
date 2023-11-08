const db = require('../database/models')
const products= require('../data/products.json');
const product = require('../database/models/product');

module.exports = {
    index : (req,res) => {
        console.log(req.session.userLogin)

        db.Product.findAll({
            include : ['images']
        })
            .then(products => {
                return res.render('index', {products})
            }).catch(error => console.log(error))
        
        
    }
};

// module.exports = {
//     admin: (req, res) => {
//         db.Product.findAll()
//             .then(products => {
//                 res.render('admin.ejs', {products})
//             })
    
//         }
    
// } 