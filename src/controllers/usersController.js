module.exports = {
    login : (req,res) => {
        return res.render('login');
    },
    loginProcess : require('./users/loginProcess'),
    register : require('./users/register'),
    register : (req,res) => {
        return res.render('register');
    },
    registerOk : (req,res) => {
        return res.render('registerOk');
    },
}
