const router = require('express').Router();

// returns objects with lastScannedDate (formatted string) sitesScanned (number) 
// just returns most recent scan
router.get('/',(req, res) => {
  Scan.find({}).sort({scanTime: -1}).limit(1)
  .then(response => {
    res.send(response);
  }).catch(error => {
    console.log(error);
    res.sendStatus(500);
  });
});

module.exports = router; 