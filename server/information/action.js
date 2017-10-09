const baseInformationService = require("./service");

const getFullInformation = (req, res, next) => {
  baseInformationService.getFullInformation(req.body.username).then(function(data) {
    res.send(data);
  });
};

const getStars = (req, res, next) => {
  baseInformationService.getStars(req.body.username).then(function(data) {
    res.send(data);
  });
};

const getFallowers = (req, res, next) => {
  baseInformationService.getFallowers(req.body.username).then(function(data) {
    res.send(data);
  });
};

const getFallowing = (req, res, next) => {
  baseInformationService.getFallowing(req.body.username).then(function(data) {
    res.send(data);
  });
};

const getCommits = (req, res, next) => {
  baseInformationService.getCommits(req.body.username).then(function(data) {
    res.send(data);
  });
};

const getOrganizationQuantity = (req, res, next) => {
  baseInformationService.getOrganizationQuantity(req.body.username).then(function(data) {
    res.send(data);
  });
};

const getCommistAvarage = (req, res, next) => {
  baseInformationService.getCommistAvarage(req.body.username).then(function(data) {
    res.send(data);
  });
};

module.exports = {
  getFullInformation,
  getStars,
  getFollowers,
  getFallowing,
  getCommits,
  getOrganizationQuantity,
  getCommistAvarage
};