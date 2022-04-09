// Importing modules
const express = require('express');
const {
    viewUserPosts
} = require('../controllers/post');

// Initializing router
const router = new express.Router();

router.get('/all', viewUserPosts);

// Exporting Modules
module.exports = router;