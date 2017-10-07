const repositoryService = require("./service");

const getRepository = (req, res, next) => {
  repositoryService.getRepository(req.body.username).then((data) => {
     res.send(data)
  });
};

module.exports = {
  getRepository
};