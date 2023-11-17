module.exports = (req, res, next) => {
    res.locals.userLogin = req.session.userLogin;
    next();
};
