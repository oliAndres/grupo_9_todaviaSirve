const db = require('../database/models')

module.exports= { 
index : require('./brands/indexBrand'),
add : require('./brands/add'),
update: require('./brands/update'),
create: require('./brands/create'),
edit: require('./brands/edit'),
delete: require('./brands/remove'),
}