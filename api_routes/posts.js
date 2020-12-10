const express = require('express');
const { ObjectID } = require('mongodb');
const { Image, Post } = require('../models');
const { mongoChecker, isMongoError } = require('./helpers/mongo_helpers');
const cloudinary = require('cloudinary');
const router = express.Router();
const log = console.log;

const CLOUDINARY_API_KEY = "193735732249155";
const CLOUDINARY_API_SECRET = process.env.CLOUDINARY_API_SECRET || "HkfQZDE4wfICeSlDf1igVz5ta1M";


cloudinary.config({
    cloud_name: 'ooglyboogly343',
    api_key: CLOUDINARY_API_KEY,
    api_secret: CLOUDINARY_API_SECRET
});

/**
 * Create a new post.
 * 
 * Request body expects:
 * 
 * {
 *      "userid": <userid>,
 *      "tag": <tag>
 *      "text": <text>,
 *      "image_url": <image url>
 * }
 */
router.post('/api/posts', mongoChecker, async (req, res) => {
    const userid = req.body.userid;
    const tag = req.body.tag;
    const text = req.body.text;
    const image_url = req.body.image_url;
    var image = null;
    
    //upload to cloudinary and create image modelm using result
    if(image_url){
        try {
            cloudinary.uploader.upload(
                image_url, 
                function (result) {
                    image = {
                        image_id: result.public_id,
                        image_url: result.url,
                        created_at: new Date(),
                    };
                }
            );
        } catch (error) {
            log(error);
            res.status(500).send("Problem uploading to cloudinary");
            return;
        }
    }

    if (req.session.user != userid) {
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
        likes: [] //list of user id's, number of likes is then likes.length
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
})

// TODO: Did you mean to create a GET method?
/** Get post with id as given in url parameter. */
router.post('/api/posts/:id', mongoChecker, async (req, res) => {
    const postID = req.params.id;

    if (!ObjectID.isValid(postID)) {
		res.status(404).send();
		return;
    }
    
    try {
        log(`fetching post [${postID}]`);
        const post = await Post.findById(postID);
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
})

/**
 * Record that this user likes this post.
 * 
 * Request body expects:
 * 
 * {
 *      "userid": <user id>
 * }
 */
router.post('/api/posts/:id/like', mongoChecker, async (req, res) => {
    const postID = req.params.id;
    const userID = req.body.userid;

    if (!ObjectID.isValid(postID)) {
        res.status(404).send("No such post");
		return;
    }

    if (!ObjectID.isValid(userID)) {
        res.status(404).send("No such user");
		return;
    }

    if (userID !== req.session.user) {
        res.status(401).send("Unauthorized");
    }

    try {
        const post = await Post.findById(postID);
        if (post.likes.find(userID)) {
            res.status(400).send("User has already liked this post");
            return;
        }
        post.likes.push(userID);
        const result = await post.save();
        res.status(200).send(result);
        log(`user [${userID}] liked a post [${post._id}]`);
    } catch (error) {
        log(error);
        if (isMongoError(error)) {
            res.status(500).send("Internal Server Error");
        } else {
            res.status(400).send();
        }
    }

});

/**
 * Record that this user commented on this post.
 * 
 * Request body expects:
 * 
 * {
 *      "userid": <user id>
 *      "text": <comment text>
 * }
 */
router.post('/api/posts/:id/comment', mongoChecker, async (req, res) => {
    const postID = req.params.id;
    const { userID, text } = req.body;

    if (!ObjectID.isValid(postID)) {
        res.status(404).send("No such post");
		return;
    }

    if (!ObjectID.isValid(userID)) {
        res.status(404).send("No such user");
		return;
    }

    if (userID !== req.session.user) {
        res.status(401).send("Unauthorized");
        return;
    }

    try {
        const post = await Post.findById(postID);
        if (!post) {
            res.status(404).send("Could not find post");
            return;
        }
        post.comments.push({
            userid: userID,
            text: text
        });
        const result = await post.save();
        res.status(200).send(result);
        log(`user [${userID}] commented on a post [${post._id}]`);

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
