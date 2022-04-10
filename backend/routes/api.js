// Importing modules
const express = require('express');
const stackExchange = require('../controllers/api');

// Initializing router
const router = new express.Router();

router.get('/stackexchange', stackExchange);

// Exporting Modules
module.exports = router;