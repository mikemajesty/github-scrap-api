const repositoryService = require("./service");
const rules = require('./rules');

const getRepository = (req, res, next) => {
  repositoryService.getRepository(req.query.username).then((data) => {
    res.send(data);
  });
};

const getRulesRepository = (req, res, next) => {
  repositoryService.getRepository(req.query.username).then((data) => {
    res.send(rules.fullRules(data, {
      stars: req.query.stars || 5,
      forks: req.query.forks || 1
    }));
  });
};

const getStars = (req, res, next) => {
  repositoryService.getStars(req.query.username).then((data) => {
    res.send(rules.getStars(data));
  });
};

const getForks = (req, res, next) => {
  repositoryService.getForks(req.query.username).then((data) => {
    res.send(rules.getForks(data));
  });
};

const getBestRepository = (req, res, next) => {
  repositoryService.getRepository(req.query.username).then((data) => {
    res.send(rules.getBestRepositoty(data));
  });
};

const getLanguage = (req, res, next) => {
  repositoryService.getRepository(req.query.username).then((data) => {
    res.send(rules.getLanguage(data));
  });
};

const getAllNames = (req, res, next) => {
  repositoryService.getRepositoryName(req.query.username).then((data) => {
    res.send(rules.getAllNames(data));
  });
};

const getAllLanguages = (req, res, next) => {
  repositoryService.getRepositoryLanguage(req.query.username).then((data) => {
    res.send(rules.getAllLanguages(data));
  });
};

module.exports = {
  getRepository,
  getRulesRepository,
  getStars,
  getForks,
  getBestRepository,
  getLanguage,
  getAllLanguages,
  getAllNames
};