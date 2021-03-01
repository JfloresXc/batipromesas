const {Router} = require('express')
const routes = Router()
const {renderUsers} = require('../controllers/user.controllers')

routes.route('')
    .get(renderUsers)

module.exports = routes