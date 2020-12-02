const express = require('express')
const { ObjectID } = require('mongodb');
const { User, Statistic, Post } = require('../models');
const {mongoChecker, isMongoError} = require('./helpers/mongo_helpers')

const router = express.Router();
const log = console.log;


//get current user calling this route
router.get('/api/users/currentuser', mongoChecker, async (req, res) => {
    
    if (!req.session.user || !ObjectID.isValid(req.session.user)){
		res.status(404).send()
		return;
    }

    try {
        const user = User.findById(req.session.user);
        res.status(200).send(user);

    } catch (error) {
        if (isMongoError(error)) {
            res.status(500).send("Internal Server Error");
        } else {
            log(error);
            res.status(400).send("Internal Server Error");
        }
    }

})

//get user document by id
router.get('/api/users/:id', mongoChecker, async (req, res) => {

    
    const userid = req.body.userid;
    log(`fetching user ${userid}`);

    try {
        const user = await User.findByID(userid);
        if(!user){
            res.status(404).send();
            return;
        }
        res.status(200).send(user);
    } catch (error) {
        log(error);
        if (isMongoError(error)) {
            res.status(500).send("Internal Server Error");
        } else {
            res.status(400).send("Internal Server Error");
        }
    }

})


//Create new user and add to database
/*
Request body expects :
{
    "username": <username>,
    "password": <password>,
    "firstname": <firstname>,
    "lastname": <lastname>
}
*/
//response is the user document created
router.post('/api/users', mongoChecker, async (req, res) => {

    const user = new User({
        username: req.body.username,
        password: req.body.password,
        firstname: req.body.firstname,
        lastname: req.body.lastname,
        profilePicture: null,
        bio: null,
        followers: [],
        following: [],
        isAdmin: false
    });

    log(`Creating new user ${user.username}`);

    try {
        const result = await user.save();
        res.send(result)
    } catch (error) {
        if (isMongoError(error)) {
            res.status(500).redirect('/login');
        } else {
            log(error);
            res.status(400).redirect('/login');
        }
    }
})

//Get the feed for a user by id, fetches all posts of all followed users
router.get('/api/user/:id/feed', mongoChecker, async (req, res) => {

    const userid = req.params.id;
    
    if(!ObjectID.isValid(userid)){
        res.status(404).send()
        return;
    }

    log(`fetching feed for ${userid}`);

    try {
        const user = await User.findById(userid);
        if(!user) {
            res.status(404).send();
            return;
        }
        const feed =  await Post.find({ userid: { $in: user.following }}) //returns all posts of all followed users
        if(!feed) {
            res.status(404).send()
            return;
        }
        res.status(200).send(feed)
        
    } catch (error) {
        log(error);
        if (isMongoError(error)) {
            res.status(500).send("Internal Server Error");
        } else {
            res.status(400).send();
        }
    }
})

//get all statistics for this user
router.get('/api/users/:id/statistics', mongoChecker, async (req, res) => {
    const userid = req.params.id;

    if (!ObjectID.isValid(userid)) {
        res.status(404).send();
        return;
    }

    log(`'fetching all statistics for user id: ${userid}`)

    try {
        const stats = await Statistic.find({userid: userid});
        if(!stats) {
            res.status(404).send()
            return;
        }
        res.status(200).send(stats);
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