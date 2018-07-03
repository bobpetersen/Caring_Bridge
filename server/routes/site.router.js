const router = require('express').Router();
const Site = require('../models/Site');
const { rejectUnauthenticated } = require('../modules/authentication-middleware');

// returns an array of site objects
router.get('/', rejectUnauthenticated, (req, res) => {
    Site.find({ audit_data: { flagged: true } })
        .then((results) => {
            res.send(results);
        })
        .catch((error) => {
            console.log(error);
            res.sendStatus(500);
        });
});

// takes in 'status' param with value 'spam', or 'safe'
// takes in body {id: site id}
router.put('/:status', rejectUnauthenticated, (req, res) => {
    let statusUpdate = req.params.status;
    if (statusUpdate === 'spam') {
        Site.findByIdAndUpdate(req.body.id, {
            isDeleted: 1,
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
        Site.findByIdAndUpdate(req.body.id, {
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

});

// for development only
// requires body: site object
router.post('/', rejectUnauthenticated, (req, res) => {
    Site.create(req.body)
        .then(() => {
            res.sendStatus(201);
        })
        .catch((error) => {
            console.log(error);
            res.sendStatus(500);
        });
});

module.exports = router; 