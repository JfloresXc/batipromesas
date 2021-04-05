const {Schema, model} = require('mongoose')

const Message = new Schema({
    message: {
        type: String,
    }
}, {
    timestamps: true
})

module.exports = model('messages', Message)