const jsreport = require('jsreport')();

const download = (body) => {
  return new Promise(function (resolve, reject) {
    jsreport.init().then(function () {
      jsreport.render({
        template: {
          content: body,
          engine: 'jsrender',
          recipe: 'phantom-pdf'
        }
      }).then(function (resp) {
        resolve(resp);
      });
    }).catch(function (e) {
      console.log(e);
      reject(e);
    });
  });
}

module.exports = {
  download
};