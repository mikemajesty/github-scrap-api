const streakService = require("./service");

const getScrapStreak = (req, res, next) => {
  streakService.getStreakBody(req.body.username).then(function(params) {
    res.send(JSON.stringify(params));
  });
};

module.exports = {
  getScrapStreak
};