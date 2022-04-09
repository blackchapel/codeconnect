// Importing modules
const express = require('express');
const passport = require('passport');
const passportSetup = require('../config/oauth');

const {
    createPost,
    viewUserPosts
} = require('../controllers/post');

// Initializing router
const router = new express.Router();

router.post('/create', passport.authenticate('github'), createPost);
router.get('/all', viewUserPosts);

// Exporting Modules
module.exports = router;