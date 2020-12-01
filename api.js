const express = require('express')
const { ObjectID } = require('mongodb');
const { User, Admin, Statistic, Post} = require('./models');
const {mongoChecker, isMongoError} = require('./mongo_helpers')

const router = express.Router();
const log = console.log;


/*** Regular user API routes below **********************************/

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
        const user =  await User.findByUsernamePassword(username, password);
        if (!user) {
            res.redirect('/login');
        } else {
            req.session.user = user._id; //need to put this into url parameter for each page
            res.redirect('/home')
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

//add new user to database
/*
Request body expects :
{
    "username": <username>
    "password": <password hash>
}
*/

router.post('/api/users', mongoChecker, async (req, res) => {

    const user = new User({
        username: req.body.username,
        password: req.body.password
    });

    try {
        const result = await user.save();
        res.send(result)
    } catch(error) {
        log(error)
        res.status(404).send('Bad Request');
    }
})

router.get('/api/users/:id', mongoChecker, async (req, res) => {

    const id = req.params.id;

    if(!ObjectID.isValid(id)){
		res.status(404).send()
		return
	}

    try {
        const user = await User.findById(id);
        res.send(user);
    } catch(error) {
        log(error)
        res.status(404).send('Bad Request');
    }

})

/*** Admin user API routes below **********************************/

router.delete('/api/users/:id', mongoChecker, async (req, res) => {
    const id = req.params.id;

    if(!ObjectID.isValid(id)){
		res.status(404).send()
		return
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

module.exports = router