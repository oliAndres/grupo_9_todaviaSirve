const { check, validationResult } = require('express-validator');
const db = require("../../database/models");

// Función para mostrar la página de inicio de sesión
exports.showLoginPage = (req, res) => {
    res.render('login', { errors: [] }); // Paso un arreglo vacío de errores para que no se muestren errores al cargar la página
};

// Función para procesar el formulario de inicio de sesión
exports.processLogin = [
    (req, res) => {
        const errors = validationResult(req);

  if (errors.isEmpty()) {
    db.User.findOne({
      where: {
        email: req.body.email,
      },
    })
      .then((user) => {
        req.session.userLogin = {
          id: user.id,
          name: user.name,
          role: user.roleId,
          email: user.email,
        };

        req.body.remember !== undefined && res.cookie('todaviaSirve', req.session.userLogin, {
            maxAge: 1000 * 60
        });


        return res.redirect("/");
      })
      .catch((error) => console.log(error));
  } else {

    return res.render('login', {
      old: req.body,
        errors : errors.mapped()
    })
  }
}];
