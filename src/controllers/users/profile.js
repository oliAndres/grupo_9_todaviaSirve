const { User, Avatars,Product,Image } = require('../../database/models')

module.exports = async (req,res) => {
    try {      
        const user = await User.findByPk(req.session.userLogin.id, {
            include : ['address']
        });

        const userProducts = await Product.findAll({
            where: {
              userId: user.id,
            },
            include: [{ model: Image, as: 'images' }], 
          });

        const avatars = await Avatars.findAll();

        const birthdate = new Date(user.birthdate).toISOString();
            console.log(birthdate.split('T')[0]);

            return res.render('profile',{
                ...user.dataValues,
                birthdate : birthdate.split('T')[0],
                avatars: avatars,
                userProducts
            })
    } catch (error) {
        res.status(500).send('Error en el servidor');
      }
}