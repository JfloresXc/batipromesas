const {Router} = require('express')
const routes = Router()
const {renderTemas, createTema,
    deleteTema, updateTema} = require('../controllers/topics.controllers')

routes.route('/')
    .get(renderTemas)
    .post(createTema)

routes.route('/:id')
    .delete(deleteTema)
    .put(updateTema)

module.exports = routes