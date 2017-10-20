const express = require('express');
const router = express.Router();
const action = require('./action');

router.use('/', action.getInformation);

router.use('/*', (req, res) => {
  res.status(404).send();
});

module.exports = router;