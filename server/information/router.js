const express = require('express');
const router = express.Router();
const action = require('./action');

router.post('/full', action.getFullInformation);
router.post('/stars', action.getStars);
router.post('/followers', action.getFollowers);
router.post('/following', action.getFollowing);
router.post('/commits', action.getCommits);
router.post('/organizations', action.getOrganizationQuantity);
router.post('/commits/average', action.getCommistAverage);

module.exports = router;