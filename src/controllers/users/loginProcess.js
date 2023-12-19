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
          avatar: user.avatar,
          role: user.roleId,
        };

        req.body.remember !== undefined && res.cookie('todaviaSirve', req.session.userLogin.id, {
            maxAge: 1000 * 60
        });

        db.Order.findOne({
          where: {
            userId: user.id,
            statusId: 1,
          },
          include: [
            {
              association: "items",
              include: [
                {
                  association: "product",
                  include: ["images"],
                },
              ],
            },
          ],
        }).then((order) => {
          if (order) {
            req.session.cart = {
              orderId: order.id,
              total: order.total,
              products: order.items.map(
                ({ quantity, product: { name, price, discount, images } }) => {
                  return {
                    name,
                    price,
                    discount,
                    image: images.find((image) => image.main).file,
                    quantity,
                  };
                }
              ),
            };

            return res.redirect("/");
          } else {
            db.Order.create({
              total : 0,
              userId : user.id,
              statusId : 1
            }).then(order => {
              req.session.cart = {
                orderId: order.id,
                total: 0,
                products: [],
              };
  
              return res.redirect("/");
            })
          }
        })
      }).catch((error) => console.log(error));
  } else {

    return res.render('login', {
        errors : errors.mapped()
    })
  }
}];
