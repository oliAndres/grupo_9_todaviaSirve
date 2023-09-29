module.exports = (req,res) => {
    req.session.destroy();
    res.cookie('todaviaSirve', null, {
        maxAge: -1
    });
    return res.redirect('/')
}