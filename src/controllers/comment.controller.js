const controller = {}
const Comment = require('../models/comment.model')

controller.renderComments = async (req, res) => {
    const comments = await Comment.find()
    res.render('pages/comments', {comments: comments, activeComments: true})
}

controller.createComment = async (req, res) => {
    const {username, description} = req.body
    if(username === '' || description === ''){
        res.redirect('/comment')
    }

    const comment = new Comment(req.body)
    await comment.save()
    res.redirect('/comment')
}

controller.updateComment = async (req, res) => {
    const comments = await Comment.find()
    res.render('pages/updateComment', {comments: comments, activeComments: true})
}

controller.deleteComments = async (req, res) => {
    await Comment.remove()
    res.json({message: 'Deleted successfully !'})
}

controller.getComment = async (req, res) => {
    const {id} = req.params
    const comment = await Comment.findById(id)
    res.json(comment) 
}

controller.deleteComment = async (req, res) => {
    const comment = await Comment.findByIdAndDelete(req.params.id)
    res.redirect('/comment/update')
}

module.exports = controller