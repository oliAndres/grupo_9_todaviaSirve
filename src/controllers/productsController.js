module.exports = {
    detail : (req,res) => {
        return res.render('productDetail');
    },
    new : (req,res) => {
        return res.render('newProduct');
    },
    edit : require('./products/edit'),
    update : require('./products/update')
}