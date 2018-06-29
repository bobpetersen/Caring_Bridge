const router = require('express').Router();
const Profile = require('../models/Profile');

// returns an array of profile objects
router.get('/', rejectUnauthenticated, (req, res) => {
    Profile.find({ isFlagged: true })
        .then((results) => {
            res.send(results);
        })
        .catch((error) => {
            console.log(error);
            res.sendStatus(500);
        });
});

// takes in 'status' param with value 'reset', 'spam', or 'notSpam'
// takes in body the _id of the profile
router.put('/:status', rejectUnauthenticated, (req, res) => {

});

//FOR DEVELOPMENT ONLY
// requires profile object
router.post('/', rejectUnauthenticated, (req, res) => {
    Profile.create(req.body)
        .then(() => {
            res.sendStatus(201);
        })
        .catch((error) => {
            console.log(error);
            res.sendStatus(500);
        });
});

module.exports = router; 