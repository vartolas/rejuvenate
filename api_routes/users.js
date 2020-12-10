const express = require('express');
const { ObjectID } = require('mongodb');
const { User, Statistic, Post } = require('../models');
const { mongoChecker, isMongoError } = require('./helpers/mongo_helpers');

const router = express.Router();
const log = console.log;

/**
 * Get the current user calling this route.
 */
router.get('/api/users/currentuser', mongoChecker, async (req, res) => {
    if (!req.session.user) {
        res.redirect('/login');
    }

    if (!ObjectID.isValid(req.session.user)) {
        res.status(404).send();
		return;
    }

    try {
        const user = await User.findById(req.session.user);
        if (!user) {
            res.status(404).send("User not found");
            return;
        }
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

/**
 * Check if this username already exists in the user database.
 * 
 * Expected response body:
 * 
 * {
 *      isTaken: <true if taken, else false>
 * }
 */
router.get('/api/users/check/:username', async (req, res) => {
    const username = req.params.username;

    try {
        log(`checking username ${username}`)
        const existingUser = await User.findOne({ username: username });
        let usernameTaken;

        if (existingUser) {
            log(`username ${username} is taken`);
            usernameTaken = true;
        } else {
            log(`username ${username} is not yet taken`);
            usernameTaken = false;
        }

        res.status(200).send({ usernameTaken: usernameTaken });
    } catch (error) {
        log(error);
        if (isMongoError(error)) {
            res.status(500).send("Internal Server Error");
        } else {
            res.status(400).send("Bad Request");
        }
    }
});

/**
 * Get a particular user by id.
 */
router.get('/api/users/:id', mongoChecker, async (req, res) => {
    const userid = req.params.id;
    log(`fetching user ${userid}`);

    try {
        const user = await User.findById(userid);
        if (!user) {
            res.status(404).send();
            return;
        }
        res.status(200).send(user);
    } catch (error) {
        log(error);
        if (isMongoError(error)) {
            res.status(500).send("Internal Server Error");
        } else {
            res.status(400).send("Bad Request");
        }
    }
})

// Create new user and add to database

/**
 * Create a new user in the user database.
 * 
 * Request body expects:
 * 
 * {
 *      "username": <username>,
 *      "password": <password>,
 *      "firstname": <firstname>,
 *      "lastname": <lastname>
 * }
 */
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
        res.send(result);
    } catch (error) {
        if (isMongoError(error)) {
            res.status(500).redirect('/login');
        } else {
            log(error);
            res.status(400).redirect('/login');
        }
    }
})

/**
 * Get all posts for a particular user for each user they follow.
 * This generates the user feed.
 */
router.get('/api/user/:id/feed', mongoChecker, async (req, res) => {
    const userid = req.params.id;
    
    if (!ObjectID.isValid(userid)) {
        res.status(404).send();
        return;
    }

    log(`fetching feed for ${userid}`);

    try {
        const user = await User.findById(userid);
        if (!user) {
            res.status(404).send();
            return;
        }
        const feed = await Post.find({ userid: { $in: user.following } }); // returns all posts of all followed users
        if (!feed) {
            res.status(404).send();
            return;
        }
        res.status(200).send(feed);
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
 * Get all posts for this user.
 */
router.get('/api/users/:id/posts', mongoChecker, async (req, res) => {
    const userid = req.params.id;

    if (!ObjectID.isValid(userid)) {
        res.status(404).send();
        return;
    }

    log(`fetching all posts for user [${userid}]`);

    try {
        const posts = await Post.find({userid: userid});
        if (!posts) {
            res.status(404).send();
            return;
        }
        res.status(200).send(posts);
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
 * Get all statistics for this user.
 */
router.get('/api/users/:id/statistics', mongoChecker, async (req, res) => {
    const userid = req.params.id;

    if (!ObjectID.isValid(userid)) {
        res.status(404).send();
        return;
    }

    log(`fetching all statistics for user [${userid}]`);

    try {
        const stats = await Statistic.find({userid: userid});
        if (!stats) {
            res.status(404).send();
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

/**
 * Delete this user with a particular id.
 * User must be an admin.
 */
router.delete('/api/users/:id', mongoChecker, async (req, res) => {
    if (!req.session.isAdmin) {
        res.status(401).send("Unauthorized");
        return;
    }

    const userid = req.params.id;

    if (!ObjectID.isValid(userid)) {
		res.status(404).send()
		return;
    }
    
    try {
        log(`deleting user [${userid}]`);
        const user = await User.findById(userid);
        user.remove();
        res.send(user);
    } catch (error) {
        log(error);
        if (isMongoError(error)) {
            res.status(500).send("Internal Server Error");
        } else {
            res.status(400).send();
        }
    }

})

module.exports = router;
