const mongoose = require('mongoose');

const CommentSchema = mongoose.Schema({
    postId: {type: mongoose.Schema.Types.ObjectId, required: true},
    userId: {type: mongoose.Schema.Types.ObjectId, required: true},
    text: { type: String, required: true }
})

module.exports = { CommentSchema }