const db = require('../database/models')
/*module.exports ={
    category : (req,res) => {
        return res.render('category');
    }
}*/
module.exports= { 
index : require('./categories/indexCateg'),
add : require('./categories/add'),
create: require('./categories/create'),
edit: require('./categories/edit'),
update: require('./categories/update'),
delete: require('./categories/remove'),
}




