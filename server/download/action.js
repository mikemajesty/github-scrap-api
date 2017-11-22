const downloadService = require("./service");

const getPdf = (req, res, next) => {
  downloadService.download(req.body.body).then(function (data) {
    res.download('./foo.pdf');
    res.send(data);
  });
};

module.exports = {
  getPdf
};