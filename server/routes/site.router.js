const router = require('express').Router();
const Site = require('../models/Site');
const SiteProfile = require('../models/SiteProfile');
const Profile = require('../models/Profile');
const { rejectUnauthenticated } = require('../modules/authentication-middleware');

// returns an array of site objects
router.get('/', (req, res) => {
    Site.find({ 'audit_data.flagged': true })
        .then((results) => {
            for (site of results) {
                SiteProfile.find({ 'siteId': site._id }).sort({createdAt: -1})
                    .then(relationship => {
                        Profile.find({ '_id': relationship[0].userId })
                            .then(profile => {
                                site.user = profile[0];
                                console.log(profile);
                            })
                            .catch((error) => {
                                console.log(error);
                                res.sendStatus(500);
                            });
                    })
                    .catch((error) => {
                        console.log(error);
                        res.sendStatus(500);
                    });
            }
            res.send(results);
        })
        .catch((error) => {
            console.log(error);
            res.sendStatus(500);
        });
});

// takes in 'status' param with value 'spam', or 'safe'
//  takes in body with id, reason (array of reasons why flagged)
router.put('/:status', (req, res) => {
    let statusUpdate = req.params.status;
    if (statusUpdate === 'spam') {
        Site.findByIdAndUpdate(req.body.id, {
            isDeleted: '1',
            audit_data: {
                flagged: false,
                reason: req.body.reason,
                result: statusUpdate,
                auditedBy: req.user.username,
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
            isDeleted: '0',
            audit_data: {
                result: statusUpdate,
                flagged: false,
                reason: req.body.reason,
                auditedBy: req.user.username,
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
    else if (statusUpdate === 'reset') {
        Site.findByIdAndUpdate(req.body.id, {
            isDeleted: '0',
            audit_data: {
                result: '',
                flagged: true,
                reason: req.body.reason,
                auditedBy: req.user.username,
            },
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