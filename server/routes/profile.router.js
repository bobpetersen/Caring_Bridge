const router = require('express').Router();
const Profile = require('../models/Profile');
const { rejectUnauthenticated } = require('../modules/authentication-middleware');

// returns an array of profile objects
router.get('/', rejectUnauthenticated, (req, res) => {
    Profile.find({ audit_data: { flagged: true } })
        .then((results) => {
            res.send(results);
        })
        .catch((error) => {
            console.log(error);
            res.sendStatus(500);
        });
});

//returns the bio associated with a particular user, when passed the id of that user
router.get('/:id', rejectUnauthenticated, (req, res) => {
    let userID = req.params.id;
    Profile.findById(userID)
        .then((result) => {
            res.send(result.bio);
        })
        .catch((error) => {
            console.log(error);
            res.sendStatus(500);
        });
});

// takes in 'status' param with value 'spam', or 'safe'
// takes in body of {id: profile id}
router.put('/:status', rejectUnauthenticated, (req, res) => {
    let statusUpdate = req.params.status;
    if (statusUpdate === 'spam') {
        Profile.findByIdAndUpdate(req.body.id, {
            isDeleted: '1',
            audit_data: {
                result: statusUpdate
            }
        })
            .then(() => {
                res.sendStatus(200);
            })
            .catch((error) => {
                console.log(error);
                res.sendStatus(500);
            });
    }
    else if (statusUpdate === 'safe') {
        Profile.findByIdAndUpdate(req.body.id, {
            audit_data: {
                result: statusUpdate,
                flagged: false,
            }
        })
            .then(() => {
                res.sendStatus(200);
            })
            .catch((error) => {
                console.log(error);
                res.sendStatus(500);
            });
    }

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