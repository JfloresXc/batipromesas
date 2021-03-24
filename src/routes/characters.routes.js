const {Router} = require('express')
const routes = Router()
const {renderCharacters, createCharacter,
    deleteCharacter, updateCharacter,
    deleteCharacters, renderFormCharacter } = require('../controllers/characters.controllers')
const { midlewareLogin } = require('../helpers/login.helpers')


routes.route('/')
    .get(renderCharacters)
    .delete(midlewareLogin, deleteCharacters)

routes.route('/add')
    .get(midlewareLogin, renderFormCharacter)
    .post(midlewareLogin, createCharacter)

routes.route('/:id')
    .put(midlewareLogin, updateCharacter)
    .delete(midlewareLogin, deleteCharacter)

module.exports = routes