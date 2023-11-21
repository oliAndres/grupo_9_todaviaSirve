const {validationResult} = require('express-validator')
const db = require('../../database/models');

module.exports = (req, res) => {

  const errors = validationResult(req)

  if (errors.isEmpty()){

    const { name, lastName, street, city, province, birthdate } = req.body;

    db.User.update(
      {
        name : name.trim(),
        lastName : lastName.trim(),
        birthdate
        
      },
      {
        where : {
          id : req.session.userLogin.id
        }
      }
    )
    
      .then( async () => {
        req.session.userLogin.name = name;
        res.locals.userLogin.name = name;

        if(req.cookies.todaviaSirve){
            res.cookie("todaviaSirve", req.session.userLogin);
        }

        await db.Address.update(
          {
            province,
            city,
            street : street.trim()
          },
          {
            where : {
              id : req.session.userLogin.id
            }
          }   
        )
          return res.redirect('/')
        })
      .catch(error => console.log(error)) 
    
/*
  req.session.userLogin.name= name.trim()
  res.locals.userLogin = req.session.userLogin
  return res.redirect("/");
*/
} else{
    db.User.findByPk(req.session.userLogin.id)

        .then(user => {
            return res.render('profile', {
                ...user.dataValues,
                errors : errors.mapped()
            });
        })
        .catch(error => console.log(error))

}
  
};