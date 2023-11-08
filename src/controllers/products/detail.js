const products = require('../../data/products.json');

module.exports = (req, res) => {
    const idParam = parseInt(req.params.id); 
    const prodFind = products.find((p) => p.id === idParam); 
    return res.render('productDetail', {
        prodfind: prodFind
    });
};
