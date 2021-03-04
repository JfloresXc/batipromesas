const {Schema, model} = require('mongoose')

const Character = new Schema({
    name: {
        type: String, 
        required: true
    },
    description: {
        type: String, 
        required: true
    }
}, {
    timestamps: true
})

module.exports = model('characters', Character)