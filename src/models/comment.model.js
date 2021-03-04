const {Schema, model} = require('mongoose')

const Comment = new Schema({
    username: {type:String, required: true},
    description: {type:String, required: true},
}, {
    timestamps: true
})

module.exports = model('comments', Comment)