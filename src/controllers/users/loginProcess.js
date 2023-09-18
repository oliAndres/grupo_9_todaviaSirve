const {validationResult} = require('express-validator');
const { readJSON } = require('../../data');


module.exports = (req,res) => {

    const errors = validationResult(req);
    
 console.log(req.body)
    if(errors.isEmpty()){
        const users = readJSON('users.json');
        const {email, remember} = req.body
        const user = users.find(user => user.email === email);
        const {id, name, role} = user;

       
        req.session.userLogin = {
            id,
            name,
            role
        }
        req.body.remember !== undefined && res.cookie('todaviaSirve', req.session.userLogin, {
            maxAge : 1000 * 60
        })
        console.log(req.session.userLogin)
        return res.redirect('/')

    }else {
        return res.render('login',{
            errors : errors.mapped()
        })
    }
    
}