const express = require('express')
const morgan = require('morgan')
const path = require('path')
const expHbs = require('express-handlebars')
const {allowInsecurePrototypeAccess} = require('@handlebars/allow-prototype-access')
const handlebars = require('handlebars')
const flash = require('connect-flash')
const passport = require('passport')
const session = require('express-session')
const methodOverride = require('method-override')
const upload = require('./config/multer')
const app = express()
require('./config/passport')

// Settings
app.set('port', process.env.PORT || 2424)
app.set('views', path.join(__dirname, 'views'))
app.engine('hbs', expHbs({
    extname: '.hbs',
    defaultLayout: 'main',
    layoutsDir: path.join(app.get('views'), 'layouts'),
    partialsDir: path.join(app.get('views'), 'partials'),
    handlebars: allowInsecurePrototypeAccess(handlebars)
}))
app.set('view engine', 'hbs')

// Midlewares
app.use(morgan('dev'))
app.use(express.urlencoded({extended: false}))
app.use(express.json())
app.use(methodOverride('_method'))
app.use(upload)
app.use(session({
    secret: 'es un secreto de tu mirada y la mía, un presentimiento',
    resave: true,
    saveUninitialized: true
}))
app.use(passport.initialize())
app.use(passport.session())
app.use(flash())

// Global Varibles
app.use((req, res, next) => {
    res.locals.user = req.user
    res.locals.error = req.flash('error')
    next()
})

//Routes
app.use(require('./routes/index.routes'))
app.use('/user', require('./routes/user.routes'))
app.use('/galery', require('./routes/galery.routes'))
app.use('/characters', require('./routes/characters.routes'))
app.use('/topics', require('./routes/topics.routes'))
app.use('/comment', require('./routes/comment.routes'))

//Static files
app.use(express.static(path.join(__dirname, 'public')))

module.exports = app

