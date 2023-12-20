const multer = require('multer');

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, './public/images/categories'); // Asegúrate de que la ruta coincida con tu configuración
  },
  filename: (req, file, cb) => {
    cb(null, `${Date.now()}_category`);
  }
});

const upload = multer({ storage });

module.exports = upload;