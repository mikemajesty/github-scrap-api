const rules = require('./rules');
const streakService = require("./service");

const getMaxCommit = (req, res, next) => {
  streakService.getStreakBody(req.body.username).then(function(data) {
    res.status(200).send(rules.getMaxCommits(data));
  });
};

const getCurrentStreak = (req, res, next) => {
  streakService.getCurrentStreak(req.body.username).then(function(data) {
    res.status(200).send({streak: rules.getCurrentStreak(data).toString()});
  });
};

const getFullStreak = (req, res, next) => {
  streakService.getCurrentStreak(req.body.username).then(function(data) {
    res.status(200).send(data);
  });
};

module.exports = {
  getMaxCommit,
  getCurrentStreak,
  getFullStreak
};