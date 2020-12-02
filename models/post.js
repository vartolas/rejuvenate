const mongoose = require('mongoose')
const { ImageSchema } = require('./image')
const { CommentSchema } = require('./comment')


const Post = mongoose.model('Post', {
    userid: mongoose.Schema.Types.ObjectId, //id of user whos post this is
    title: {
        type: String,
        required: true,
    },
    text: {
        type: String,
        maxlength: 300
    },
    timestamp: {type: Date, required: true},
    image: ImageSchema,
    comments: [CommentSchema],
    likes: [mongoose.Schema.Types.ObjectId] //list of user id's, number of likes is then likes.length
})


module.exports = { Post }