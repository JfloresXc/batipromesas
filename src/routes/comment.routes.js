const { Router } = require('express')
const routes = Router()
const { createComment, deleteComment,
    renderComments, getComment, 
    deleteComments, updateComment } = require('../controllers/comment.controller')
const { midlewareLogin } = require('../helpers/login.helpers')

routes.route('/')
    .get(renderComments)
    .post(createComment)
    .delete(midlewareLogin, deleteComments)

routes.route('/update')
    .get(midlewareLogin, updateComment)

routes.route('/:id')
    .get(midlewareLogin, getComment)
    .delete(midlewareLogin, deleteComment)

module.exports = routes