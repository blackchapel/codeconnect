// Importing modules
const express = require('express');
const verifyjwt = require('../middleware/auth');
const passport = require('passport');
const passportSetup = require('../config/oauth'); 
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
    scope: ['profile%20repo:status']
}));

router.get('/github/callback', passport.authenticate('github'), (req, res) => {
    res.redirect('http://localhost:3000/dash');
});

router.get('/user/view', passport.authenticate('github'), (req, res) => {
    res.status(200).json({
        data:req.user
    });
});

// Exporting Modules
module.exports = router;