const express = require('express');
const router = express.Router();
const action = require('./action');

router.use('/forks/names', action.getForksNames);
router.use('/amount', action.getContributionAmount);
router.use('/contributions', action.getContributionInformation);
router.use('/', action.getPullRequest);

router.use('/*', (req, res) => {
  res.status(404).send();
});

module.exports = router;