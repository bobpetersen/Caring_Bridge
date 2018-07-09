const router = require('express').Router();
const Scan = require('../models/Scan');
const { rejectUnauthenticated } = require('../modules/authentication-middleware');

// returns objects with scanTime (date) sitesScanned (number) 
// just returns most recent scan
router.get('/', rejectUnauthenticated, (req, res) => {
  Scan.find({}).sort({scanTime: -1}).limit(1)
  .then(response => {
    res.send(response);
  }).catch(error => {
    console.log(error);
    res.sendStatus(500);
  });
});

module.exports = router; 