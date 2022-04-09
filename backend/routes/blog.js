// Importing modules
const express = require('express');
const verifyjwt = require('../middleware/auth');
const passport = require('passport');
const passportSetup = require('../config/oauth');

const {
    createBlog,
    viewUserBlogs,
    viewBlog,
    view10Blogs
} = require('../controllers/blog');

// Initializing router
const router = new express.Router();

router.post('/create', passport.authenticate('github'), createBlog);
router.get('/all', viewUserBlogs);
router.get('/:id', viewBlog);
router.get('/random', view10Blogs);

// Exporting Modules
module.exports = router;