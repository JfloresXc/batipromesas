const {Schema, model} = require('mongoose')

const Tema = new Schema({
    title: {type: String, required: true},
    description: {type: String, required: true}
}, {
    timestamps: true
})

module.exports = model('temas', Tema)