const multer = require('multer');

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, './public/images/productos'); // Asegúrate de que la ruta coincida con tu configuración
  },
  filename: (req, file, cb) => {
    cb(null, `${Date.now()}_products_${file.originalname}`);
  }
});

const upload = multer({ storage });

module.exports = upload;