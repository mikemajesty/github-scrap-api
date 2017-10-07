const express = require('express');
const router = express.Router();
const action = require('./action');

router.post('/full', action.getRepository);
router.post('/format', action.getRulesRepository);
router.post('/stars', action.getStars);
router.post('/forks', action.getForks);
router.post('/best', action.getBestRepository);
router.post('/language', action.getLanguage);
router.post('/full/languages', action.getAllLanguages);
router.post('/full/names', action.getAllNames);

module.exports = router;