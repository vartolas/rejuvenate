const express = require('express')
const { ObjectID } = require('mongodb');
const { User } = require('../models');
const {mongoChecker, isMongoError} = require('./helpers/mongo_helpers')

const router = express.Router();
const log = console.log;


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