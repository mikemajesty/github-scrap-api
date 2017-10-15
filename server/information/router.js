const express = require('express');
const router = express.Router();
const action = require('./action');

router.use('/full', action.getFullInformation);
router.use('/stars', action.getStars);
router.use('/followers', action.getFollowers);
router.use('/following', action.getFollowing);
router.use('/commits/average', action.getCommistAverage);
router.use('/commits', action.getCommits);
router.use('/organizations', action.getOrganizationQuantity);

router.use('/*', (req, res) => {
  res.status(404).send();
});

module.exports = router;