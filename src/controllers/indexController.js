const db = require('../database/models')

module.exports = {
  index: (req, res) => {
    console.log(req.session.userLogin);

        db.Product.findAll({
            include : ['images']
        })
            .then(products => {
                return res.render('index', {products})
            }).catch(error => console.log(error))
        
        
    }
};