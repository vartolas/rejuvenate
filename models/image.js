const mongoose = require('mongoose')


const ImageSchema = mongoose.Schema({
    type: {type: String, required: true}, //for example 'png', 'jpeg' etc.
    data: {type: Buffer, required: true} //the actual image bytes
})

module.exports = { ImageSchema }