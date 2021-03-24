const { Router } = require('express')
const passport = require('passport')
const routes = Router()
const { midlewareLogin } = require('../helpers/login.helpers')

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

routes.get('/home', midlewareLogin, (req, res) => {
    res.render('pages/home')
})

module.exports = routes