const {validationResult} = require('express-validator')
const db = require('../../database/models');

module.exports = (req, res) => {

  const errors = validationResult(req)

if (errors.isEmpty()){

  const { name, lastName, address, birthdate } = req.body;

  const id = req.params.id;

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
        address : address,
        birthdate
      },
      {
        where : {
          id : req.params.id
        }
      }
    )
    .then(() => {
      if(req.files.image){
        existsSync(`./public/images/users/${user.avatar.find(image => image).file}`) && 
        unlinkSync(`./public/images/users/${user.avatar.find(image => image).file}`);
        db.Image.destroy({
            where : {
                id : req.params.id,        
            }
        })
        .then (() => {
            db.Image.create({
                file : req.files.image[0].filename,        
                id : req.params.id
            })
        })
    }
    })
    .catch(error => console.log(error)) 
  })
  

  req.session.userLogin.name= name.trim()
  res.locals.userLogin = req.session.userLogin
  return res.render("/users/profile");

} else{

  const id = req.params.id;

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