const express = require('express');
const router = express.Router();
const action = require('./action');

router.post('/', action.getCurrentStreak);
router.post('/full', action.getFullStreak);
router.post('/maxcommit', action.getMaxCommit);

module.exports = router;