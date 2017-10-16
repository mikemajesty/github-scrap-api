const contributorService = require("./service");
const rules =  require("./rules");
const getPullRequest = (req, res, next) => {
  contributorService.getPullRequest(req.query.username).then(function(data) {
    res.status(200).send(rules.getContributorsInformation(data));
  });
};

module.exports = {
  getPullRequest
};