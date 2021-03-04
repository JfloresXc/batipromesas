const {Router} = require('express')
const routes = Router()
const {renderCharacters, createCharacter,
    deleteCharacter, updateCharacter} = require('../controllers/characters.controllers')

routes.route('/')
    .get(renderCharacters)
    .post(createCharacter)

routes.route('/:id')
    .put(updateCharacter)
    .delete(deleteCharacter)

module.exports = routes