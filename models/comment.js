const mongoose = require("mongoose");

const CommentSchema = mongoose.Schema({
	postid: { type: mongoose.Schema.Types.ObjectId, required: true },
	userid: { type: mongoose.Schema.Types.ObjectId, required: true },
	username: {type: String, required: true},
	text: { type: String, required: true },
});

module.exports = { CommentSchema };
