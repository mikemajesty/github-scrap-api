const express = require('express');
const router = express.Router();
const action = require('./action');

router.use('/full', action.getRepository);
router.use('/format', action.getRulesRepository);
router.use('/stars', action.getStars);
router.use('/forks', action.getForks);
router.use('/best', action.getBestRepository);
router.use('/favorite/language', action.getLanguage);
router.use('/languages', action.getAllLanguages);
router.use('/names', action.getAllNames);

module.exports = router;