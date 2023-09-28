const {existsSync, unlinkSync} = require('fs');
const { readJSON, writeJSON } = require("../../data");

module.exports = (req,res) => {

    const {name, marca, price, category, description} = req.body; 

    const products = readJSON('products.json');

    const productsModify = products.map(product => {
        if(product.id == req.params.id){

            req.files.length && product.images.forEach(image => {
                existsSync(`./public/images/productos/${image}`) && unlinkSync(`./public/images/productos/${image}`);
            });

            product.name = name.trim()
            product.marca = marca.trim()
            product.price = +price
            product.category = category
            product.description = description.trim()
            product.images = req.files.length ? req.files.map(file => file.filename) : product.images;
        }
        return product
    })

    writeJSON(productsModify, 'products.json')

    return res.redirect('/admin');
}