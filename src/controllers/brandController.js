const db = require('../database/models')

module.exports= { 
index : require('./brands/indexBrand'),
add : require('./brands/add'),
create: require('./brands/create'),
}