const db = require('../database/models')
const fetch = require('node-fetch')

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
        
        
    },
    search: (req, res) => {
        let { search } = req.query;
        console.log("Valor de búsqueda:", search);
    
        db.Product.findAll({
            where: {
                name: { [db.Sequelize.Op.like]: `%${search}%` }
            },
            include: ['images']
        })
        .then(products => {
            console.log(products)
            res.render('searchResults', { products });
        })
        .catch(error => {
            console.error(error);
            res.status(500).send('Error en la búsqueda');
        });
    },
    
    
};
