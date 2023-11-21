const db = require('../../database/models')

module.exports = (req,res) => {

    db.User.findByPk(req.session.userLogin.id, {
        include : ['address']
    })
        .then(user => {
            
            const birthdate = new Date(user.birthdate).toISOString();
            console.log(birthdate.split('T')[0]);
            return res.render('profile',{
                ...user.dataValues,
                birthdate : birthdate.split('T')[0]
            })
        })
        .catch(error => console.log(error))
    
}