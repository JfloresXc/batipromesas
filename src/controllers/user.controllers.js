const controller = {}
const User = require('../models/user.models')

controller.renderUsers = async (req, res) => {
    const users = await User.find()
    res.json(users)
}

controller.createUser = async (req, res) => {
    const { password } = req.body
    const user = new User(req.body)
    user.password = await user.encryptPassword(password)
    await user.save()
    res.json(user)
}

controller.deleteUsers = async (req, res) => {
    await User.remove()
    res.json({ message: 'All deleted successfully !' })
}

controller.renderUser = async (req, res) => {
    const user = await User.findById(req.params.id)
    res.json(user)
}

controller.deleteUser = async (req, res) => {
    await User.findByIdAndDelete(req.params.id)
    res.json({ message: 'Deleted complete' })
}

module.exports = controller