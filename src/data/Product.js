const { readJSON } = require(".");

const products = readJSON('products.json')
const Product = function ({name,marca,price,category,description,image}) {

    this.id =  products.length ? products[products.length -1].id + 1 : 1;
    this.name = name;
    this.marca = marca;
    this.price = +price;
    this.category = category;
    this.description = description;
    this.image = null;
    this.createAt = new Date

}
module.exports = Product