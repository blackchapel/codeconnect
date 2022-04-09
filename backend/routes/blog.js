// Importing modules
const express = require('express');
const verifyjwt = require('../middleware/auth');
const {
    viewUserBlogs,
    viewBlog
} = require('../controllers/blog');

// Initializing router
const router = new express.Router();

router.get('/blog/all', viewUserBlogs);
router.get('/blog/:id', viewBlog);

// Exporting Modules
module.exports = router;
