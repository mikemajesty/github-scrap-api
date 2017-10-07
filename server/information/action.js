const baseInformationService = require("./service");

const getBaseInformation = (req, res, next) => {
  baseInformationService.getBaseInformation(req.body.username).then(function(data) {
    res.send(data);
  });
};

module.exports = {
  getBaseInformation
};