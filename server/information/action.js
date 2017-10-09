const baseInformationService = require("./service");

const getFullInformation = (req, res, next) => {
  baseInformationService.getFullInformation(req.query.username).then(function(data) {
    res.send(data);
  });
};

const getStars = (req, res, next) => {
  baseInformationService.getStars(req.query.username).then(function(data) {
    res.send(data);
  });
};

const getFollowers = (req, res, next) => {
  baseInformationService.getFollowers(req.query.username).then(function(data) {
    res.send(data);
  });
};

const getFollowing = (req, res, next) => {
  baseInformationService.getFollowing(req.query.username).then(function(data) {
    res.send(data);
  });
};

const getCommits = (req, res, next) => {
  baseInformationService.getCommits(req.query.username).then(function(data) {
    res.send(data);
  });
};

const getOrganizationQuantity = (req, res, next) => {
  baseInformationService.getOrganizationQuantity(req.query.username).then(function(data) {
    res.send(data);
  });
};

const getCommistAverage = (req, res, next) => {
  baseInformationService.getCommistAverage(req.query.username).then(function(data) {
    res.send(data);
  });
};

module.exports = {
  getFullInformation,
  getStars,
  getFollowers,
  getFollowing,
  getCommits,
  getOrganizationQuantity,
  getCommistAverage
};