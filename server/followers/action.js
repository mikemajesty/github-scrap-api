const informationService = require("./service");

const getInformation = (req, res, next) => {
  informationService.getFollowers(req.query.username).then(function(data) {
    res.send(data);
  });
};

module.exports = {
  getInformation
};