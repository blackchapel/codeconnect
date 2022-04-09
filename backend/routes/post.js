// Importing modules
const express = require('express');
const passport = require('passport');
const passportSetup = require('../config/oauth');

const {
    createPost,
    viewUserPosts,
    view10Posts
} = require('../controllers/post');

// Initializing router
const router = new express.Router();

router.post('/create', passport.authenticate('github'), createPost);
router.get('/all', viewUserPosts);
router.get('/random', view10Posts);

// Exporting Modules
module.exports = router;