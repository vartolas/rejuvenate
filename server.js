const path = require('path');
const express = require('express');
const bodyParser = require('body-parser');
const { ObjectID } = require('mongodb');

//mongoose connection
const { mongoose } = require('./db/mongoose');

//db models
const { User } = require('./models/user');
const { Statistic } = require('./models/statistic');
const { Post } = require('./models/post');

//start app
const app = express();
app.use(express.static(path.join(__dirname, 'build')));
app.use(bodyParser.json());

const log = console.log;


/**helper middleware */
function checkMongoose(req, res, next){
    if (mongoose.connection.readyState != 1) {
        log('Issue with mongoose connection')
        res.status(500).send('Internal server error')
        return;
    }
}

/*** Regular user API routes below **********************************/

//add new user to database
/*
Request body expects :
{
    "username": <username>
    "password": <password hash>
    ""
}
*/

app.post('/api/users', checkMongoose, async (req, res) => {

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

app.get('/api/users/:id', checkMongoose, async (req, res) => {

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

app.delete('/api/users/:id', checkMongoose, async (req, res) => {
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

/*** Route to serve webpage **********************************/

app.get('*', (req, res) => {
    res.status(200).sendFile(path.join(__dirname, 'build', 'index.html'));
});

/*** Start Listening on PORT **********************************/
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`server listeing at http://localhost:${PORT}...`);
})