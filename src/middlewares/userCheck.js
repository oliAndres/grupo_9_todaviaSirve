module.exports = (req,res,next) => {
    if (req.session.userLogin && req.session.userLogin.role === "user"){
        next()
    } else {
        return res.redirect('/users/login')
    }
}