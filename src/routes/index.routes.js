const { Router } = require('express')
const passport = require('passport')
const routes = Router()
const { midlewareLogin } = require('../helpers/login.helpers')
const Message = require('../models/messages.model')

routes.get('/', (req, res) => {
    const navIndex = true
    res.render('pages/index', {navIndex})
})

routes.get('/login', (req, res) => {
    res.render('pages/login')
})

routes.post('/login', passport.authenticate('local', {
    failureFlash: true,
    failureRedirect: '/login', 
    successRedirect: '/home'
}))

routes.get('/userWrong', (req, res) => {
    res.render('pages/login', {userWrong: true})
})

routes.get('/logout', (req, res) => {
    req.logout()
    res.redirect('/')
})

routes.get('/home', midlewareLogin, async (req, res) => {
    const messages = await Message.find()
    res.render('pages/home', {messages})
})

routes.post('/home/message', async (req, res) => {
    const message = new Message(req.body)
    await message.save()
    res.json(message)
})

module.exports = routes