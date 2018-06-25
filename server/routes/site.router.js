const router = require('express').Router();

// returns an array of site objects
router.get('/', (req, res) => {

});

// takes in 'status' param with value 'reset', 'spam', or 'notSpam'
// takes in body the _id of the site
router.put('/:status', (req, res) => {

});

// for development only
// requires body: site object
router.post('/', (req, res) => {

});

module.exports = router; 