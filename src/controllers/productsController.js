module.exports = {
    detail : (req,res) => {
        return res.render('productDetail');
    },
    edit : (req,res) => {
        return res.render('editProduct');
    },
    new : (req,res) => {
        return res.render('newProduct');
    }
}