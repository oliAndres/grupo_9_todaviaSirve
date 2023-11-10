const db = require('../../database/models');

module.exports = async (req, res) => {
    try {
        // Obtenemos el id del perfil guardado en la session 
        const id = req.session.userLogin.id;

        const user = await db.User.findByPk(id, {
            include: {
                all: true,
            },
        });
        //VERIFICO CON UN CONSOLE LOG QUE SE TRAIGAN TODOS LOS DATOS DE USUARIO   
        // console.log('Datos del usuario:', user);

        res.render('profile', {
            //Al renderizar pasamos todos los datos del usuario
            user: {
                ...user.dataValues,
            },
        });
    } catch (error) {
        console.log(error);
        res.status(500).send('Error interno del servidor');
    }
};
