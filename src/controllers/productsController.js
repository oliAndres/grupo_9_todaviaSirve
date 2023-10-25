const db = require('../database/models')
module.exports ={
    add : require('./products/add'),
    detail : require('./products/detail'),
    edit : require('./products/edit'),
    create : require('./products/create'),
    deleteProduct : require('./products/deleteProduct'),
    destroyProduct : require ('./products/destroyProduct'),
    update : require('./products/update'),
}