const pdf = require('html-pdf');
const fs = require('fs');

const download = (body) => {
  return new Promise(function (resolve, reject) {
    return pdf.create(body).toBuffer(function (err, buffer) {
      resolve(buffer);
    });
  });
}

module.exports = {
  download
};