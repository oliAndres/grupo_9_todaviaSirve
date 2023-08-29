const { readJSON } = require("../../data");

module.exports = (req,res) => {

    const {name, marca, price, category, description} = req.body; 

    const products = readJSON('products.json');

    const productsMoify = products.map(product => {
        if(product.id === req.params.id){
            product.name = name.trim()
            product.marca = marca.trim()
            product.price = +price
            product.category = category
            product.description = description.trim()
        }
        return product
    })
    return res.send(req.boy);
}