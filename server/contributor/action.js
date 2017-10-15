const contributorService = require("./service");

const getPullRequest = (req, res, next) => {
  contributorService.getPullRequest(req.query.username).then(function(data) {
    res.status(200).send(data);
  });
};

module.exports = {
  getPullRequest
};