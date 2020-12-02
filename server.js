const path = require('path');
const express = require('express');
const session = require('express-session');
const bodyParser = require('body-parser');

//mongoose connection
const { mongoose } = require('./db/mongoose');
mongoose.set('bufferCommands', false);  // don't buffer db requests if the db server isn't connected - minimizes http requests hanging if this is the case.
mongoose.set('useFindAndModify', false); // for some deprecation issues

//db models


//start app
const app = express();
app.use(express.static(path.join(__dirname, 'build')));
app.use(bodyParser.json());
app.use(session({
    secret: process.env.SESSION_SECRET || "HARDCODED_SECRET",
    cookie: {
        expires: 600000, // have to log in after 10 minutes without server interaction
        httpOnly: true,
    },

    saveUninitialized: false,
    resave: false, // may have to change
}));


//import api routes
app.use(require('./api_routes/admin'));
app.use(require('./api_routes/users'));
app.use(require('./api_routes/posts'));
app.use(require('./api_routes/login'));
app.use(require('./api_routes/statistics'));





const sessionChecker = (req, res, next) => {
    if (req.session.user) {
        res.redirect('/home');
    } else {
        next();
    }
}

/*** Routes to serve webpage **********************************/

//for root and /login, check for existing session, if no session, continue to login page
app.get('/', sessionChecker, (req, res) => {
    res.status(200).sendFile(path.join(__dirname, 'build', 'index.html'));
})

app.get('/login', sessionChecker, (req, res) => {
    res.status(200).sendFile(path.join(__dirname, 'build', 'index.html'));
})


//for all other routes, check if user is logged in, if not, redirect to /login
app.get('*', (req, res) => {
    res.status(200).sendFile(path.join(__dirname, 'build', 'index.html'));
    //replace above line with below code for checking if user is logged in
    /* 
    if (req.session.user) {
        res.status(200).sendFile(path.join(__dirname, 'build', 'index.html'));
    } else {
        res.redirect('/login');
    }
    */
});

/*** Start Listening on PORT **********************************/
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`server listening at http://localhost:${PORT}...`);
})