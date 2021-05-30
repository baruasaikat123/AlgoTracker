const mongoose = require('mongoose')
const Schema = mongoose.Schema

const qusSchema = new Schema({
 
    title: {
        type: String,
        required: true
    },
    link: {
        type: String,
        required: true
    },
    topic: {
        type: String,
        required: true
    },  
    details: String,
})

const Qus = mongoose.model('QUESTION', qusSchema)

module.exports = Qus