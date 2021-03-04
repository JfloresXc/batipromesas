const helper = {}
const passport = require('passport')

helper.midlewareLogin = (req, res, next) => {
    if(req.isAuthenticated()){
        return next()
    }
    res.redirect('/')
}

module.exports = helper