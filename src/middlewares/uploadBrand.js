const multer = require('multer');

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, './public/images/brands'); // Asegúrate de que la ruta coincida con tu configuración
  },
  filename: (req, file, cb) => {
    cb(null, `${Date.now()}_brand`);
  }
});

const upload = multer({ storage });

module.exports = upload;