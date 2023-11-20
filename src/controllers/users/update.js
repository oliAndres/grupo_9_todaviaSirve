const {validationResult} = require('express-validator')
const db = require('../../database/models');

module.exports = (req, res) => {

  const errors = validationResult(req)

if (errors.isEmpty()){

  const { name, lastName, address, city, province, birthdate } = req.body;

  const id =  req.session.userLogin.id;

  db.User.findByPk(id, {
    include : {
      all : true
    }
  })
  .then(user => {
    db.User.update(
      {
        name : name.trim(),
        lastName : lastName.trim(),
        
      },
      {
        where : {
          id : req.session.userLogin.id
        }
      }
    )
    
    /*.then((user) => {
    db.Address.update(
      {
      city : city.trim(),
      lastName : lastName.trim(),
      street : street.trim()

    }   
    )
    })*/
    .catch(error => console.log(error)) 
  })
  

  req.session.userLogin.name= name.trim()
  res.locals.userLogin = req.session.userLogin
  return res.render("profile");

} else{

  const id = req.session.userLogin.id;

    const user = db.User.findByPk(id, {
        include : {
            all : true
        }
    });

    Promise.all([user])
        .then(([user]) => {
            return res.render('profile', {
                ...user,
                errors : errors.mapped()
            });
        })
        .catch(error => console.log(error))


}
  
};