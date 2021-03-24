const {Router} = require('express')
const routes = Router()
const {addImage, deleteImage, renderImages, renderFormImage} = require('../controllers/galery.controllers')
const { midlewareLogin } = require('../helpers/login.helpers')


routes.route('/')
    .get(renderImages)

routes.route('/add')
    .get(midlewareLogin, renderFormImage)
    .post(midlewareLogin, addImage)

routes.route('/:id')
    .delete(midlewareLogin, deleteImage)

module.exports = routes