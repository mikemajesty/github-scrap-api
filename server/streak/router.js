const express = require('express');
const router = express.Router();
const action = require('./action');

router.use('/quantity', action.getCurrentStreak);
router.use('/full', action.getFullStreak);
router.use('/maxcommit', action.getMaxCommit);

router.use('/*', (req, res) => {
  res.status(404).send();
});

module.exports = router;