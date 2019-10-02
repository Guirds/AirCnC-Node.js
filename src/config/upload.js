const multer = require('multer');
const path = require('path')

module.exports = {
  storage: multer.diskStorage({
    destination: path.resolve(__dirname, "..", "..", "uploads"), //mac, wi, linux
    filename: (req, file, cb) => {
      const ext = path.extname(file.originalname);
      const name = path.basename(file.originalname, ext)

      cb(null, `${name}-${Date.now()}${ext}`)
    },
  })
}

//fieldname é o nome da img original "coworking.png"
//Date.now() garante que cada img vai ser unica e não vão se sobre por
//file.originalname nome completo da img
//path.extname busca a extensão ".png"
//path.basename() retorna o nome de um img sem a extensão