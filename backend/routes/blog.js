// Importing modules
const express = require('express');
const verifyjwt = require('../middleware/auth');
const {
    viewUserBlogs,
    viewBlog
} = require('../controllers/blog');

// Initializing router
const router = new express.Router();

router.get('/all', viewUserBlogs);
router.get('/:id', viewBlog);

// Exporting Modules
module.exports = router;