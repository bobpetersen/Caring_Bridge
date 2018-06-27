const express = require('express');
const { rejectUnauthenticated } = require('../modules/authentication-middleware');
const encryptLib = require('../modules/encryption');
const Auditor = require('../models/Auditor');
const userStrategy = require('../strategies/user.strategy');

const router = express.Router();

// Handles Ajax request for user information if user is authenticated
router.get('/', rejectUnauthenticated, (req, res) => {
  // Send back user object from database
  console.log(req.user);
  res.send(req.user);
});

// Handles POST request with new user data
// The only thing different from this and every other post we've seen
// is that the password gets encrypted before being inserted
router.post('/register', (req, res, next) => {
  
  const username = req.body.username;
  const password = encryptLib.encryptPassword(req.body.password);

  const newAuditor = new Auditor({ username, password });
  newAuditor.save()
    .then(() => { res.sendStatus(201); })
    .catch((err) => { next(err); });
});

// Handles login form authenticate/login POST
// userStrategy.authenticate('local') is middleware that we run on this route
// this middleware will run our POST if successful
// this middleware will send a 404 if not successful
router.post('/login', userStrategy.authenticate('local'), (req, res) => {
  res.sendStatus(200);
});

// clear all server session information about this user
router.get('/logout', (req, res) => {
  // Use passport's built-in method to log out the user
  req.logout();
  res.sendStatus(200);
});

///////////////////////////// CODE TO BE WRITTEN BY US //////////////////////////////////////

// returns array of all user objects, except passwords
router.get('/all', (req, res) => {
  if (req.isAuthenticated() && req.user.is_admin && req.user.is_active) {
    Auditor.find({}, {password: 0})
      .then((results) => {
        res.send(results);
      })
      .catch((error) => {
        console.log(error);
      });
  }
  else {
    res.sendStatus(403);
  }
});

//can deactivate or reactivate user OR change admin status
// requires body: _id
// if changing activated status: requires body: 'is_active' value of true or false
// if changing admin status: requires body: 'is_admin' value of true or false
router.put('/', (req, res) => {
  if (req.isAuthenticated() && req.user.is_admin && req.user.is_active) {
    Auditor.findByIdAndUpdate(req.body._id, req.body)
      .then(() => {
        res.sendStatus(200);
      })
      .catch((error) => {
        console.log(error);
        res.sendStatus(500);
      });
  }
  else {
    res.sendStatus(403);
  }
});

//will enable deprecated accounts to be deleted
//requires url params of id: user._id
router.delete('/', (req, res) => {
  if (req.isAuthenticated() && req.user.is_admin && req.user.is_active) {
    Auditor.findByIdAndRemove(req.query.id)
      .then(() => {
        res.sendStatus(200);
      })
      .catch((error) => {
        console.log(error);
        res.sendStatus(500);
      });
  }
  else {
    res.sendStatus(403);
  }
});

module.exports = router;
