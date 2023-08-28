const products= require('../data/products.json');

module.exports = {
    detail : (req,res) => {
        const idParam= req.params.id;
		const prodFind = products.find((p) => p.id === idParam);
        return res.render('productDetail',{
            prodfind:prodFind
        });
    },
    edit : (req,res) => {
        return res.render('editProduct');
    },
    add : (req,res) => {
        return res.render('productAdd');
    }
}