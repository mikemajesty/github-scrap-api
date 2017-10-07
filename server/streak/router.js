const express = require('express');
const router = express.Router();
const action = require('./action');

router.post('/', action.getScrapStreak);

module.exports = router;