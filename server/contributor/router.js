const express = require('express');
const router = express.Router();
const action = require('./action');

router.use('/pull/request', action.getPullRequest);

module.exports = router;