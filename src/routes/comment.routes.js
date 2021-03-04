const { Router } = require('express')
const routes = Router()
const { createComment, deleteComment,
    renderComments, getComment, 
    deleteComments } = require('../controllers/comment.controller')

routes.route('/')
    .get(renderComments)
    .post(createComment)
    .delete(deleteComments)

routes.route('/:id')
    .get(getComment)
    .delete(deleteComment)

module.exports = routes