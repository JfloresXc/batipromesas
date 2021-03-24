const multer = require('multer')
const path = require('path')

const storage = multer.diskStorage({
    destination: path.join(__dirname, '../public/img/uploads'),
    filename: (req, file, cb) => {
        cb(null, file.originalname)
    }
})

const upload = multer({
    storage,
    limits: {fileSize: 1000000},
    fileFilter: (req, file, cb) => {
        const extImage = /jpeg|jpg|png|gif/
        const mimetype = extImage.test(file.mimetype)

        if(mimetype){
            return cb(null, true)
        }
        cb('Error: El tipo de archivo introducido no es de algún tipo jpeg - jpg - png - gif')
    }
}).single('image')

module.exports = upload