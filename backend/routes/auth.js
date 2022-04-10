// Importing modules
const express = require('express');
const verifyjwt = require('../middleware/auth');
const passport = require('passport');
const passportSetup = require('../config/oauth'); 
const {
    signup,
    login,
    logout,
    sendUser,
    OAuthLogin,
    OAuthCallback
} = require('../controllers/auth');

// Initializing router
const router = new express.Router();

router.post('/signup', signup);
router.post('/login', login);
router.put('/logout', verifyjwt, logout);
router.get('/github', OAuthLogin);
router.get('/github/callback', OAuthCallback);
router.get('/user/view', sendUser);

// Exporting Modules
module.exports = router;