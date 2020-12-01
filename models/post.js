const mongoose = require('mongoose')

const ImageSchema = mongoose.Schema({
    type: String,
    data: Buffer
})

const Post = mongoose.model('Post', {
    title: {
        type: String,
        required: true,
    },
    text: {
        type: String,
        maxlength: 300
    },
    image: ImageSchema
})

module.exports = { Post }