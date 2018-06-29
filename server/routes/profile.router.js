const router = require('express').Router();
const Profile = require('../models/Profile');

// returns an array of profile objects
if (req.isAuthenticated() && req.user.is_active) {
    router.get('/', (req, res) => {
        Profile.find({ isFlagged: true })
            .then((results) => {
                res.send(results);
            })
            .catch((error) => {
                console.log(error);
                res.sendStatus(500);
            })
    });
}
else {
    res.sendStatus(403);
}


// takes in 'status' param with value 'reset', 'spam', or 'notSpam'
// takes in body the _id of the profile
if (req.isAuthenticated() && req.user.is_active) {
    router.put('/:status', (req, res) => {

    });
}
else {
    res.sendStatus(403);
}


//FOR DEVELOPMENT ONLY
// requires profile object
router.post('/', (req, res) => {
    Journal.create(req.body)
        .then(() => {
            res.sendStatus(201);
        })
        .catch((error) => {
            console.log(error);
            res.sendStatus(500);
        })
});

module.exports = router; 