const express = require("express");
const { ObjectID } = require("mongodb");
const { Post } = require("../models");
const { mongoChecker, isMongoError } = require("./helpers/mongo_helpers");
const multipart = require("connect-multiparty");

// uses cloudinary to store the images of a post
const cloudinary = require("cloudinary");
cloudinary.config({
	cloud_name: "druaf5vie",
	api_key: "771591311784341",
	api_secret: "nSUBmGMGzhUUb314DPNrjbbusGM",
});

const multipartMiddleware = multipart();

const router = express.Router();
const log = console.log;

//Create Post
/*
Request body expects :
{
    "userid": <userid>,
    "title": <title>,
    "text": <text>,
    "image": <image>
}
*/
router.post(
	"/api/posts",
	multipartMiddleware,
	mongoChecker,
	async (req, res) => {
		//console.log(req);
		const userid = req.body.userid;
		const tag = req.body.tag;
		const text = req.body.text;

		console.log(req.body);
		console.log(req.body.userid);
		console.log(req.session.user);
		if (req.session.user !== userid) {
			res.status(401).send("Unauthorized");
			return;
		}
		//upload to cloudinary and create image modelm using result

		if (req.files && "image" in req.files) {
			try {
				cloudinary.uploader.upload(req.files.image.path, async (result) => {
					var image = {
						image_id: result.public_id,
						image_url: result.url,
						created_at: new Date(),
					};

					// console.log(req.body);
					// console.log(req.body.userid);
					// console.log(req.session.user);
					if (req.session.user !== userid) {
						res.status(401).send("Unauthorized");
						return;
					}

					const post = new Post({
						userid: userid, //id of user whos post this is
						tag: tag, //tag for this post
						text: text, //text for this post
						timestamp: new Date(), //current time
						image: image, //image for post or null
						comments: [], // list of comments (according to CommentSchema)
						likes: [], //list of user id's, number of likes is then likes.length
					});

					try {
						const result = await post.save();
						log(`Created post for user [${userid}]`);
						res.status(200).send(result);
					} catch (error) {
						log(error);
						if (isMongoError(error)) {
							res.status(500).send("Internal Server Error");
						} else {
							res.status(400).send();
						}
					}
				});
			} catch (error) {
				log(error);
				res.status(500).send("Problem uploading to cloudinary");
				return;
			}
		} else {
			const post = new Post({
				userid: userid, //id of user whos post this is
				tag: tag, //tag for this post
				text: text, //text for this post
				timestamp: new Date(), //current time
				image: null, //image for post or null
				comments: [], // list of comments (according to CommentSchema)
				likes: [], //list of user id's, number of likes is then likes.length
			});

			try {
				const result = await post.save();
				log(`Created post for user [${userid}]`);
				res.status(200).send(result);
			} catch (error) {
				log(error);
				if (isMongoError(error)) {
					res.status(500).send("Internal Server Error");
				} else {
					res.status(400).send();
				}
			}
		}
	}
);

//Get post with id as given in url parameter
router.get("/api/post/:id", mongoChecker, async (req, res) => {
	const postid = req.params.id;

	if (!ObjectID.isValid(postid)) {
		res.status(404).send();
		return;
	}

	try {
		log(`fetching post [${postid}]`);
		const post = await Post.findById(postid);
		if (!post) {
			res.status(404).send();
			return;
		}
		res.status(200).send(post);
	} catch (error) {
		log(error);
		if (isMongoError(error)) {
			res.status(500).send("Internal Server Error");
		} else {
			res.status(400).send();
		}
	}
});

//Like or unlike a post
/*
Request body expects :
{
    "userid": <user id>
}
*/
router.post("/api/posts/:id/like", mongoChecker, async (req, res) => {
	const postid = req.params.id;
	const userid = req.body.userid;

	if (!ObjectID.isValid(postid)) {
		res.status(404).send("No such post");
		return;
	}

	if (!ObjectID.isValid(userid)) {
		res.status(404).send("No such user");
		return;
	}

	// if (userid !== req.session.user) {
	// 	res.status(401).send("Unauthorized");
	// }

	try {
		const post = await Post.findById(postid);
		if (post.likes.includes(userid)) {
			// res.status(400).send("User has already liked this post");
			const userIndex = post.likes.indexOf(userid);
			if (userIndex === -1) {
				res.status(400).send("Unlike error");
				return;
			} else {
				post.likes.splice(userIndex, 1);
			}
		} else {
			post.likes.push(userid);
		}
		const result = await post.save();
		res.status(200).send(result);
		log(`user [${userid}] liked/unliked a post [${post._id}]`);
	} catch (error) {
		log(error);
		if (isMongoError(error)) {
			res.status(500).send("Internal Server Error");
		} else {
			res.status(400).send();
		}
	}
});

//Comment a post
/*
Request body expects :
{
    "userid": <user id>
    "text": <comment text>
}
*/
router.post("/api/posts/:id/comment", mongoChecker, async (req, res) => {
	const postid = req.params.id;
	const { userid, text } = req.body;

	if (!ObjectID.isValid(postid)) {
		res.status(404).send("No such post");
		return;
	}

	if (!ObjectID.isValid(userid)) {
		res.status(404).send("No such user");
		return;
	}

	if (userid !== req.session.user) {
		res.status(401).send("Unauthorized");
	}

	try {
		const post = await Post.findById(postid);
		if (!post) {
			res.status(404).send("Could not find post");
			return;
		}
		post.comments.push({
			userid: userid,
			text: text,
		});
		const result = await post.save();
		res.status(200).send(result);
		log(`user [${userid}] commented on a post [${post._id}]`);
	} catch (error) {
		log(error);
		if (isMongoError(error)) {
			res.status(500).send("Internal Server Error");
		} else {
			res.status(400).send();
		}
	}
});

// Delete a Post by its id
router.delete("/api/post/:id", mongoChecker, async (req, res) => {
	const postid = req.params.id;

	if (!ObjectID.isValid(postid)) {
		res.status(404).send();
		return;
	}

	try {
		log(`deleting post [${postid}]`);
		const post = await Post.findById(postid);
		if (!post) {
			res.status(404).send();
			return;
		}

		if (post.image == null) {
			// No image in post
			// Delete the post from the database
			const result = await Post.findByIdAndRemove(postid);
			if (!result) {
				res.status(404).send();
				return;
			}
			res.status(200).send(result);
		} else {
			//Have image in post
			// Delete an image by its id (NOT the database ID, but its id on the cloudinary server)
			// on the cloudinary server
			cloudinary.uploader.destroy(post.image.image_id, async (saveRes) => {
				// Delete the post from the database
				const result = await Post.findByIdAndRemove(postid);
				if (!result) {
					res.status(404).send();
					return;
				}
				res.status(200).send(result);
			});
		}
	} catch (error) {
		log(error);
		if (isMongoError(error)) {
			res.status(500).send("Internal Server Error");
		} else {
			res.status(400).send();
		}
	}
});

module.exports = router;
