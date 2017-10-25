const friendService = require("./service");

const getFriends = (req, res, next) => {
  friendService.getFriends(req.query.username).then(function(data) {
    res.send(data);
  });
};

module.exports = {
  getFriends
};