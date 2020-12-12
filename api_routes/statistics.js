const express = require('express');
const { ObjectID } = require('mongodb');
const { Statistic } = require('../models');
const { mongoChecker, isMongoError } = require('./helpers/mongo_helpers');

const router = express.Router();
const log = console.log;


/** Get a statistic with this id. */
router.get('/api/statistics/:id', mongoChecker, async (req, res) => {
    const statID = req.params.id;

    if (!ObjectID.isValid(statID)) {
		res.status(404).send();
		return;
    }

    try {
        log(`fetching statistic ${statID}`);
        const stat = await Statistic.findById(statID);
        if (!stat) {
            res.status(404).send();
            return;
        }
        res.status(200).send(stat);
    } catch (error) {
        log(error);
        if (isMongoError(error)) {
            res.status(500).send("Internal Server Error");
        } else {
            res.status(400).send("Internal Server Error");
        }
    }
});

/**
 * Create this new statistic.
 * 
 * Request body expects:
 * 
 * {
 *      userid: <user id>,
 *      category: <category>
 *      title: <title>,
 *      xAxis: <x axis label>,
 *      yAxis: <y axis label>,
 * }
 */
router.post('/api/statistics', mongoChecker, async (req, res) => {
    const { userID, category, title, xAxis, yAxis } = req.body;
    
    if (!ObjectID.isValid(userID)) {
		res.status(400).send();
		return;
    }

    try {
        const stat = new Statistic({
            userid: userID,
            category: category,
            title: title,
            xAxis: xAxis,
            yAxis: yAxis,
            data: []
        });

        const result = await stat.save();
        res.status(200).send(result);
        log(`Creatied new statistic [${stat._id}]`);
    } catch (error) {
        log(error);
        if (isMongoError(error)) {
            res.status(500).send("Internal Server Error");
        } else {
            res.status(400).send("Internal Server Error");
        }
    }
});

/**
 * Update data for this particular statistic.
 * 
 * Request body expects:
 * 
 * {
 *      "data": <data>
 * }
 */
router.patch('/api/statistics/:id', mongoChecker, async (req, res) =>{
    const statID = req.params.id;
    const data = req.body.data;

    if (!ObjectID.isValid(statID)) {
		res.status(404).send()
		return;
    }

    try {
        const stat = await Statistic.findById(statID);
        if (!stat) {
            res.status(404).send();
            return;
        }
        
        if (req.session.user === stat.userid || req.session.isAdmin) {
            log(`patching statistic [${stat._id}]`);
            stat.data = data;
            const result = await stat.save();
            res.status(200).send(result);
        } else {
            res.status(401).send("Unauthorized");
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

/**
 * Delete the statistic with this id.
 * You must be an admin or the user that owns this statistic.
 */
router.delete('/api/statistics/:id', async (req, res) => {
    const statID = req.params.id;

    if (!ObjectID.isValid(statID)) {
        res.status(404).send();
        return;
    }
    
    try {
        const stat = await Statistic.findById(statID);
        if (!stat) {
            res.status(404).send("Could not find statistic");
            return;
        }
        const userID = stat.userid;
        if (userID === req.session.user || req.session.isAdmin) {
            log(`Deleting statistic [${stat._id}]`)
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
});

module.exports = router;
