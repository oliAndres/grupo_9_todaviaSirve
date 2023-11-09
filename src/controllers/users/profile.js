const db = require('../../database/models')

module.exports = (req,res) => {

    const id = req.params.id;

    const user = db.User.findByPk(id, {
        include : {
            all : true
        }
    });

    Promise.all([user])
        .then(([user]) => {
            return res.render('profile', {
                ...user
            });
        })
        .catch(error => console.log(error))
}