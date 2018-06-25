const router = require('express').Router();

// returns an array of profile objects
router.get('/', (req, res) => {

});

// takes in 'status' param with value 'reset', 'spam', or 'notSpam'
// takes in body the _id of the profile
router.put('/:status', (req, res) => {

});

//FOR DEVELOPMENT ONLY
// requires profile object
router.post('/', (req,res) => {

});

module.exports = router; 