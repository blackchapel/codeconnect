// Importing modules
const express = require('express');
const stackExchange = require('../controllers/api');

// Initializing router
const router = new express.Router();

router.post('/stackexchange', stackExchange);

// Exporting Modules
module.exports = router;