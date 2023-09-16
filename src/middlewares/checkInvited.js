module.exports = (req,res,next) => {
    console.log(req.session.userLogin)
    if(!req.session.userLogin){
        next()
    }else {
        return res.redirect('/users/profile')
    }
}