module.exports = (req,res,next) => {
    if(req.cookies.todaviaSirve){
        req.session.userLogin = req.cookies.todaviaSirve
    }
    next()
}