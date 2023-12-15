const db = require('../database/models')
/*module.exports ={
    category : (req,res) => {
        return res.render('category');
    }
}*/
module.exports= { 
index : require('./categories/indexCateg'),
add : require('./categories/add')
}




