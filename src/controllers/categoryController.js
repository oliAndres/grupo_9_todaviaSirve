const db = require('../database/models')
/*module.exports ={
    category : (req,res) => {
        return res.render('category');
    }
}*/
module.exports= { 
add : require('./categories/add'),
create : require('./categories/create')
}




