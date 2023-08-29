const { readJSON } = require("../../data");

module.exports = (req,res) => {

    const categories = readJSON('categories.json');
    const products = readJSON('products.json');
    const id = req.params.id;

    const product = products.find(product => product.id === id);

    return res.render('editProduct', {
        categories,
        ...product
    });
}