const { User, Avatars } = require('../../database/models')

module.exports = async (req,res) => {
    try {      
        const user = await User.findByPk(req.session.userLogin.id, {
            include : ['address']
        });

        const avatars = await Avatars.findAll();

        const birthdate = new Date(user.birthdate).toISOString();
            console.log(birthdate.split('T')[0]);

            return res.render('profile',{
                ...user.dataValues,
                birthdate : birthdate.split('T')[0],
                avatars: avatars
            })
    } catch (error) {
        res.status(500).send('Error en el servidor');
      }
}