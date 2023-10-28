const { check, validationResult } = require('express-validator');
const db = require("../../database/models");

// Función para mostrar la página de inicio de sesión
exports.showLoginPage = (req, res) => {
    res.render('login', { errors: [], email: '' });
};

// Función para procesar el formulario de inicio de sesión
exports.processLogin = [

    async (req, res) => {
        const errors = validationResult(req);

        if (errors.isEmpty()) {
            try {
                const user = await db.User.findOne({
                    where: {
                        email: req.body.email,
                    },
                });

                if (user && user.authenticate(req.body.password)) {
                    req.session.userLogin = {
                        id: user.id,
                        name: user.name,
                        role: user.roleId,
                        email: user.email,
                    };

                    req.body.remember !== undefined && res.cookie('todaviaSirve', req.session.userLogin, {
                        maxAge: 1000 * 60,
                    });

                    return res.redirect("/");
                } else {
                    errors.errors.push({ msg: 'Credenciales incorrectas' });
                    return res.render('login', { errors, email: req.body.email });
                }
            } catch (error) {
                console.error(error);
                return res.status(500).json({ error: 'Error en el servidor' });
            }
        } else {
            return res.render('login', { errors, email: req.body.email });
        }
    },
];
