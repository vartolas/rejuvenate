const express = require('express')
const { ObjectID } = require('mongodb');
const { Statistic } = require('../models');
const {mongoChecker, isMongoError} = require('./helpers/mongo_helpers')

const router = express.Router();
const log = console.log;


//get statistic by id
router.get('/api/statistics/:id', mongoChecker, async (req, res) => {
    const statid = req.params.id;
    if(!ObjectID.isValid(statid)){
		res.status(404).send();
		return;
    }

    try {
        const stat = await Statistic.findById(statid);
        if(!stat){
            res.status(404).send()
            return;
        }
        res.status(200).send(stat)

    } catch (error) {
        log(error);
        if (isMongoError(error)) {
            res.status(500).send("Internal Server Error");
        } else {
            res.status(400).send("Internal Server Error");
        }
    }

});

//Create new statistic
/*
Request body expects:
{
    userid: <user id>,
    category: <category>
    title: <title>,
    xAxis: <x axis label>,
    yAxis: <y axis label>,
}
*/
router.post('/api/statistics', mongoChecker, async (req, res) => {
    const { userid, category, title, xAxis, yAxis } = req.body 
    
    log('Creating new Statistic')

    if(!ObjectID.isValid(userid)){
		res.status(400).send();
		return;
    }

    try {
        const stat = new Statistic({
            userid: userid,
            category: category,
            title: title,
            xAxis: xAxis,
            yAxis: yAxis,
            data: []
        });

        const result = await stat.save();
        res.status(200).send(result);
    } catch (error) {
        log(error);
        if (isMongoError(error)) {
            res.status(500).send("Internal Server Error");
        } else {
            res.status(400).send("Internal Server Error");
        }
    }
});

//update statistics data for a statistic;
/*
Request body expects :
{
    "data": <data>
}
*/
router.patch('/api/statistics/:id', mongoChecker, async (req, res) =>{
    const statid = req.params.id;
    const data = req.body.data;

    if(!ObjectID.isValid(statid)){
		res.status(404).send()
		return;
    }

    try {
        const stat = await Statistic.findById(statid);
        if(req.session.user == stat.userid || req.session.isAdmin){
            log(`patching statistic [${stat._id}]`);
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

//delete statistic with given id
//must be an admin or the user that owns this statistic
router.delete('/api/statistics/:id', async (req, res) => {

    const statid = req.params.id;

    if(!ObjectID.isValid(statid)){
		res.status(404).send()
		return;
    }
    
    try {
        const stat = await Statistic.findById(statid);
        if(!stat){
            res.status(404).send("Could not find statistic");
            return;
        }
        const userid = stat.userid;
        if(userid == req.session.user || req.session.isAdmin){
            stat.remove();
            res.status(200).send(stat);
        } else {
            res.status(401).send("Unauthorized");
        }
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