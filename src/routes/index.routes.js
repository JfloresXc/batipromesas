const { Router } = require('express')
const routes = Router()

routes.get('/', (req, res) => {
    const navIndex = true
    res.render('pages/index', {navIndex})
})

routes.get('/login', (req, res) => {
    res.render('pages/login')
})

module.exports = routes