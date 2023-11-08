const { check, validationResult } = require('express-validator');
const { readJSON } = require('../../data');

// Función para mostrar la página de inicio de sesión
exports.showLoginPage = (req, res) => {
    res.render('login', { errors: [] }); // Paso un arreglo vacío de errores para que no se muestren errores al cargar la página
};

// Función para procesar el formulario de inicio de sesión
exports.processLogin = [
    (req, res) => {
        const errors = validationResult(req);

        if (!errors.isEmpty()) {
            return res.render('login', {
                errors: errors.array()
            });
        }

        const users = readJSON('users.json');
        const { email, password, passwordTwo} = req.body;

        const user = users.find(user => user.email === email && (user.password === password || user.passwordTwo === password));

        if (user) {
            const { id, name, role, image } = user;

            req.session.userLogin = {
                id,
                name,
                role,
                image
            };

            req.body.remember !== undefined && res.cookie('todaviaSirve', req.session.userLogin, {
                maxAge: 1000 * 60
            });

            return res.redirect('/');
        } else {
            return res.render('login', {
                errors: [{ msg: 'Las credenciales proporcionadas son incorrectas' }]
            });
        }
    }
];
