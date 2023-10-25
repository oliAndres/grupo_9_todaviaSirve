module.exports = (req,res,next) => {
    if (req.session.userLogin && req.session.userLogin.role === 1){
        next()
    } else {
        return res.redirect('/')
    }
}