const contributorService = require("./service");
const rules =  require("./rules");

const getPullRequest = (req, res, next) => {
  contributorService.getPullRequest(req.query.username).then(function(data) {
    res.status(200).send(rules.getContributorsInformation(data));
  });
};

const getForksNames = (req, res, next) => {
  contributorService.getPullRequest(req.query.username).then(function(data) {
    res.status(200).send(rules.getForks(data));
  });
};

const getContributionAmount = (req, res, next) => {
  contributorService.getPullRequest(req.query.username).then(function(data) {
    res.status(200).send(rules.getContributionAmount(data));
  });
};
const getContributionInformation = (req, res, next) => {
  contributorService.getPullRequest(req.query.username).then(function(data) {
    res.status(200).send(rules.getContributionInformation(data));
  });
};



module.exports = {
  getPullRequest,
  getForksNames,
  getContributionAmount,
  getContributionInformation
};