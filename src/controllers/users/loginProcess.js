const {validationResult} = require('express-validator');
const { readJSON } = require('../../data');


module.exports = (req,res) => {

    const errors = validationResult(req);
    
 console.log(req.body)
    if(errors.isEmpty()){
        const users = readJSON('users.json');
        const {email, remember} = req.body
        const user = users.find(user => user.email === email);
        const {id, name, role, image} = user;

       
        req.session.userLogin = {
            id,
            name,
            role,
            image
        }
        console.log(req.session.userLogin)
        return res.redirect('/')

    }else {
        return res.render('login',{
            errors : errors.mapped()
        })
    }
    
}