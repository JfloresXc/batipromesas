const { Router } = require('express')
const routes = Router()
const { midlewareLogin } = require('../helpers/login.helpers')
const { renderUsers,
    createUser, deleteUser, renderUser,
    deleteUsers } = require('../controllers/user.controllers')

routes.route('/')
    .get(midlewareLogin, renderUsers)
    .delete(midlewareLogin, deleteUsers)

routes.route('/add')
    .post(createUser)

routes.route('/:id')
    .get(midlewareLogin, renderUser)
    .delete(midlewareLogin, deleteUser)

module.exports = routes