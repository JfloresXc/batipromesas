const controller = {}
const Image = require('../models/galery.model')
const { unlink } = require('fs-extra')
const path = require('path')

controller.renderImages = async (req, res) => {
    const images = await Image.find()
    console.log(images)
    var galery = null
    if(req.isAuthenticated()){
        galery = true
    }
    res.render('pages/galery', { images, galery })
}

controller.renderFormImage = async (req, res) => {
    res.render('pages/addGalery', {galery: true}) 
}

controller.addImage = async (req, res) => {
    const { title, month, description } = req.body
    const { originalname, mimetype, path, size } = req.file
    const image = new Image({
        title, description, month,
        originalname, mimetype, path, size
    })
    await image.save()
    res.redirect('/galery/add')
}

controller.deleteImage = async (req, res) => {
    const imageDeleted = await Image.findByIdAndDelete(req.params.id);
    await unlink(path.resolve(__dirname, `../public/img/uploads/${imageDeleted.originalname}`))
    res.redirect('/galery')
}

module.exports = controller