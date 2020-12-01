const express = require('express')
const { ObjectID } = require('mongodb');
const { User, Statistic, Post} = require('./models');
const {mongoChecker, isMongoError} = require('./mongo_helpers')

const router = express.Router();
const log = console.log;


/*** Regular user API routes below **********************************/

//add new user to database
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
        statistics: [],
        isAdmin: false
    });

    try {
        const result = await user.save();
        res.send(result)
    } catch(error) {
        log(error)
        res.status(404).send('Bad Request');
    }
})

// Create logged in session for user
/*
Request body expects :
{
    "username": <username>
    "password": <password>
}
*/
router.post('/api/login', mongoChecker, async (req, res) => {
    const username = req.body.username;
    const password = req.body.password;

    try {
        const user =  await User.findByUsernamePassword(username, password) 
        if (!user) {
                res.redirect('/login');
        } else {
            req.session.user = user._id; //need to put this into url parameter for each page
            req.session.username = user.username;
            req.session.isAdmin = user.isAdmin; //cookie keeps track of whether this is an admin for permission purposes
            res.redirect(`/home?user=${req.session.user}`) //pass user's ID into url parameter so it is known to client side
        }
    } catch (error) {
        if (isMongoError(error)) {
            res.status(500).redirect('/login');
        } else {
            log(error);
            res.status(400).redirect('/login');
        }
    }
});

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


    if (req.session.user !== userid) {
        res.status(401).send("Unauthorized");
        return;
    }

    const post = new Post({
        userid: userid, //id of user whos post this is
        title: title,
        text: text,
        image: image,
        comments: [],
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
            res.status(400).send("Internal Server Error");
        }
    }
})

//Like a post
/*
Request body expects :
{
    "postid": <post id>,
    "userid": <user id>
}
*/
router.post('/api/like', mongoChecker, async (req, res) => {
    
});

//comment on a post
/*
Request body expects :
{
    "postid": <post id>,
    "userid": <user id>,
    "text": <text>
}
*/
router.post('/api/comment', mongoChecker, async (req, res) => {

});

//get user document by username 
/*
Request body expects :
{
    "username": <username>
}
*/
router.get('/api/users', mongoChecker, async (req, res) => {

    
    const username = req.body.username;

    try {
        const user = User.findByUsername(username);
   
        if(!user){
            res.status(404).send();
            return;
        }

        res.send(user);
    } catch (error) {
        log(error);
        if (isMongoError(error)) {
            res.status(500).send("Internal Server Error");
        } else {
            res.status(400).send("Internal Server Error");
        }
    }

})

//update statistics data for a statistic;
/*
Request body expects :
{
    "statid": <id of statistic>
    "data": <data>
}
*/
router.patch('/api/statistics', mongoChecker, async (req, res) =>{
    const statid = req.body.statid;
    const data = req.body.data;

    if(!ObjectID.isValid(statid)){
		res.status(404).send()
		return;
    }
    try {
        const stat = Statistic.findById(statid);
        if(req.session.user === stat.userid || req.session.isAdmin){
            stat.data = data;
            const result = await stat.save();
            res.status(200).send(result);
        } else {
            res.status(401).send("Unauthorized")
            return;
        }
    
    } catch (error) {
        log(error);
        if (isMongoError(error)) {
            res.status(500).send("Internal Server Error");
        } else {
            res.status(400).send("Internal Server Error");
        }
    }

});



/*** Admin user API routes below **********************************/

//remove the user with specified id from the 
router.delete('/api/users/:id', mongoChecker, async (req, res) => {

    if(!req.session.isAdmin){
        res.status(401).send("Unauthorized");
        return;
    }

    const id = req.params.id;

    if(!ObjectID.isValid(id)){
		res.status(404).send()
		return;
    }
    
    try {
        const user = await User.findById(id);
        user.remove();
        res.send(user);
    } catch(error) {
        log(error)
        res.status(404).send('Bad Request');
    }

})

router.get('/api/logout', (req, res) => {
    req.session.destroy((error) => {
        if (error) {
            res.status(500).send(error)
        } else {
            res.redirect('/login')
        }
    })
})

module.exports = router;