const db = require('../database/models')
module.exports ={
    category : (req,res) => {
        return res.render('category');
    }
}
