<<<<<<< HEAD
const db = require('../database/models');
=======
const db = require('../database/models')
>>>>>>> 6a65898fee2a0e52dc83625ea8f57b4c445536ea

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

<<<<<<< HEAD
        const products = db.Product.findAll({
            include : ['category','section','images']
        });
        const categories = db.Category.findAll();
        const users = db.User.findAll();

        Promise.all([products,categories,users])
            .then(([products,categories,users]) => {
                return res.render('admin', {
                    products,
                    categories,
                    users
                })
            })
            .catch(error => console.log(error))
       
    }
}
=======
        db.Product.findAll({
            include : ['images']
        })
            .then(products => {
                return res.render('index', {products})
            }).catch(error => console.log(error))
        
        
    }
};
>>>>>>> 6a65898fee2a0e52dc83625ea8f57b4c445536ea
