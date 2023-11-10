const db = require('../../database/models')
const {hashSync} = require('bcryptjs');
const {validationResult} = require('express-validator')

module.exports = (req,res) => {

    const {name, lastName, city, province, email, password } = req.body
    const errors = validationResult(req);
    console.log(req.body)

    if (errors.isEmpty()) {

        db.Address.create({
            city,
            province
        })
            .then(address => {
                db.User.create({
                    name : name.trim(),
                    lastName : lastName.trim(),
                    email : email.trim(),
                    password : hashSync(password, 10),
                    roleId : 2,
                    addressId : address.id
                })
                    .then(({name, lastName}) => {
                        return res.render('registerOk', {
                            user : {
                                name,
                                lastName
                            }
                        })
                    })
            }).catch(error => console.log(error))

     
    } else {
        return res.render("register", {
            errors: errors.mapped(),
            old:req.body
        });
    }

   
   
}