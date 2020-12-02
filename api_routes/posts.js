const express = require('express')
const { ObjectID } = require('mongodb');
const { Post } = require('../models');
const {mongoChecker, isMongoError} = require('./helpers/mongo_helpers')

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
router.post('/api/post', mongoChecker, async (req, res) => {

    const userid = req.body.userid;
    const title = req.body.title;
    const text = req.body.text;
    const image = req.body.image;

    log(`Creating new post`);

    if (req.session.user !== userid) {
        res.status(401).send("Unauthorized");
        return;
    }

    const post = new Post({
        userid: userid, //id of user whos post this is
        title: title, //title of post
        text: text, //text for this post
        timestamp: new Date(), //current time
        image: image, //image for post or null
        comments: [], // list of comments (according to CommentSchema)
        likes: [] //list of user id's, number of likes is then likes.length
    });

    try {
        const result = await post.save();
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


//Get post with id as given in url parameter
router.post('/api/post/:id', mongoChecker, async (req, res) => {

    const postid = req.params.id;

    log(`Creating new post`);

    if(!ObjectID.isValid(postid)){
		res.status(404).send();
		return;
    }
    

    try {
        const post = await Post.findById(postid);;
        if (!post) {
            res.status(404).send()
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

//Like a post
/*
Request body expects :
{
    "userid": <user id>
}
*/
router.post('/api/posts/:id/like', mongoChecker, async (req, res) => {

    const postid = req.params.id
    const userid = req.body.userid

    if(!ObjectID.isValid(postid)){
		res.status(404).send("No such post")
		return;
    }

    if(!ObjectID.isValid(userid)){
		res.status(404).send("No such user")
		return;
    }

    if(userid !== req.session.user){
        res.status(401).send("Unauthorized")
    }

    try {
        const post = await Post.findById(postid);
        if (post.likes.find(userid)){
            res.status(400).send("User has already liked this post")
            return;
        }
        post.likes.push(userid);
        const result = await post.save()
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

//Like a post
/*
Request body expects :
{
    "userid": <user id>
    "text": <comment text>
}
*/
router.post('/api/posts/:id/comment', mongoChecker, async (req, res) => {

    const postid = req.params.id;
    const { userid, text } = req.body;

    if(!ObjectID.isValid(postid)){
		res.status(404).send("No such post")
		return;
    }

    if(!ObjectID.isValid(userid)){
		res.status(404).send("No such user")
		return;
    }

    if(userid !== req.session.user){
        res.status(401).send("Unauthorized")
    }

    try {
        const post = await Post.findById(postid);
        if (!post){
            res.status(404).send("Could not find post")
            return;
        }
        post.comments.push({
            userid: userid,
            text: text
        });
        const result = await post.save()
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

module.exports = router;