const { Router } = require('express')
const routes = Router()
const { midlewareLogin } = require('../helpers/login.helpers')
const { renderUsers,
    createUser, deleteUser, renderUser,
    deleteUsers } = require('../controllers/user.controllers')

routes.route('/')
    .get(midlewareLogin, renderUsers)
    .post(midlewareLogin, createUser)
    .delete(midlewareLogin, deleteUsers)

routes.route('/:id')
    .get(midlewareLogin, renderUser)
    .delete(midlewareLogin, deleteUser)

module.exports = routes