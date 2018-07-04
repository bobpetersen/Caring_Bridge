const router = require('express').Router();
const Site = require('../models/Site');
const { rejectUnauthenticated } = require('../modules/authentication-middleware');

// returns an array of site objects
router.get('/', (req, res) => {
    Site.find({ 'audit_data.flagged': true })
        .then((results) => {
            res.send(results);
        })
        .catch((error) => {
            console.log(error);
            res.sendStatus(500);
        });
});

// takes in 'status' param with value 'spam', or 'safe'
//  takes in body with id of profile, reason (array of reasons why flagged), and auditedBy (employee id string)
router.put('/:status', (req, res) => {
    let statusUpdate = req.params.status;
    if (statusUpdate === 'spam') {
        Site.findByIdAndUpdate(req.body.id, {
            isDeleted: '1',
            audit_data: {
                flagged: false,
                reason: req.body.reason,
                result: statusUpdate,
                auditedBy: req.body.auditedBy,
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
                result: statusUpdate,
                flagged: false,
                reason: req.body.reason,
                auditedBy: req.body.auditedBy,
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
router.post('/', (req, res) => {
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