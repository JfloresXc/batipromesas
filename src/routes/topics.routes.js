const {Router} = require('express')
const routes = Router()
const {renderTemas, createTema,
    deleteTema, updateTema,
    renderFormTema} = require('../controllers/topics.controllers')
const { midlewareLogin } = require('../helpers/login.helpers')

routes.route('/')
    .get(renderTemas)

routes.route('/add')
    .get(midlewareLogin, renderFormTema)
    .post(midlewareLogin, createTema)

routes.route('/:id')
    .delete(midlewareLogin, deleteTema)
    .put(midlewareLogin, updateTema)

module.exports = routes