const passport = require('passport')
const localStrategy = require('passport-local').Strategy
const User = require('../models/user.models')

passport.use(new localStrategy({
    usernameField: 'username',
    passwordField: 'password'
}, async (username, password, done) => {
    const user = await User.findOne({ username })
    if (user) {
        const passwordValue = await user.comparePassword(password)

        if(passwordValue){
            done(null, user)
        }else{
            done(null, false, {message: 'La contraseña no es correcta'})
        }

        done(null, user)
    } else {
        done(null, false, { message: 'Usuario no encontrado' })
    }

}))

passport.serializeUser((user, done) => {
    done(null, user.id)
})

passport.deserializeUser(async (id, done) => {
    const user = await User.findById(id)
    if (id) {
        done(null, user)
    }
})