const { readJSON } = require("../../data");

module.exports = (req, res) => {
    const categories = readJSON('categories.json')
    const products = readJSON('products.json')
    return res.render('productAdd', {
        categories, 
        products
    })

}
