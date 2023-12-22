module.exports = (req, res, next) => {
    console.log('Session:', req.session.userLogin);
    
    if (req.session.userLogin && req.session.userLogin.role === 1 || req.session.userLogin.role === 2) {
        console.log('Admin user detected. Allowing access.');
        next();
    } else {
        console.log('NO ES USUARIO ADMIN. REDIRECCIONANDO A /unauthorized');
        return res.redirect('/');
    }
};
