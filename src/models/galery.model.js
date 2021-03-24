const {Schema, model} = require('mongoose')

const Image = new Schema({
    title: {type: String},
    description: {type: String},
    month: {type: String},
    originalname: {type: String},
    mimetype: {type: String},
    path: {type: String},
    size: {type: Number},
}, {
    timestamps: true
})

module.exports = model('images', Image)