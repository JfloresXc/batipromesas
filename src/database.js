const mongoose = require('mongoose')
const {DB_URI} = process.env

mongoose.connect(DB_URI, {
    useUnifiedTopology: true,
    useNewUrlParser: true,
    useCreateIndex: true
})
    .then(() => {
        console.log('Database connected !')
    })
    .catch((error) => {
        console.log(error)
    })
