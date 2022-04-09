// Importing modules
const express = require('express');
const verifyjwt = require('../middleware/auth');
const passportSetup = require('../utilities/oauth'); 
const {
    signup,
    login,
    logout
} = require('../controllers/auth');

// Initializing router
const router = new express.Router();

router.post('/signup', signup);
router.post('/login', login);
router.put('/logout', verifyjwt, logout);

router.get('/github', passport.authenticate('github', {
    scope: ['profile']
}));

router.get('/github/callback', passport.authenticate('github'), (req, res) => {
    // res.send(req.user);
    res.redirect('/');
});

// Exporting Modules
module.exports = router;