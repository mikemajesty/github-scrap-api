const express = require('express');
const router = express.Router();
const action = require('./action');

router.post('/full', action.getFullInformation);
router.post('/stars', action.getStars);
router.post('/fallowers', action.getFallowers);
router.post('/fallowing', action.getFallowing);
router.post('/commits', action.getCommits);
router.post('/organizations', action.getOrganizationQuantity);
router.post('/commits/avarage', action.getCommistAvarage);

module.exports = router;