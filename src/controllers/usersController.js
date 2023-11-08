module.exports = {
    login : (req,res) => {
        return res.render('login');
    },
    loginProcess : require('./users/loginProcess'),
    showLoginPage : require('./users/loginProcess'),
    logOut : require('./users/logOut'),
    register : require('./users/register'),
    register : (req,res) => {
        return res.render('register');
    },
    registerOk : (req,res) => {
        return res.render('registerOk');
    },
    update : require('./users/update'),
    profile : require('./users/profile'),

    newUser: require('./users/createUser'),
}
