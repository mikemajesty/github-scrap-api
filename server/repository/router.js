const express = require('express');
const router = express.Router();
const action = require('./action');

router.post('/full', action.getRepository);
router.post('/rules', action.getRulesRepository);
router.post('/stars', action.getStars);
router.post('/forks', action.getForks);
router.post('/best', action.getBestRepository);
router.post('/language', action.getLanguage);

module.exports = router;