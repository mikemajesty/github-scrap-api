const express = require('express');
const router = express.Router();

router.use('/streak', require('./streak/router'));
router.use('/user', require('./information/router'));
router.use('/repository', require('./repository/router'));
router.use('/contributor', require('./contributor/router'));
router.use('/followers', require('./followers/router'));

router.use('/*', (req, res) => {
  res.status(404).send();
});

module.exports = router;