const mongoose = require('mongoose')
const Schema = mongoose.Schema

const qusSchema = new Schema({
    category: {
        type: String,
        required: true
    },
    title: {
        type: String,
        required: true
    },
    link: {
        type: String,
        required: true
    },
    notes: String,
    status: String
})

const Qus = mongoose.model('QUESTION', qusSchema)

module.exports = Qus