const rp = require('request-promise');
const cheerio = require('cheerio');

const getFullInformation = (userName) => {

  var options = {
    uri: `https://github.com/${userName}`,
    transform: function(body) {
      return cheerio.load(body);
    }
  };

  return rp(options)
    .then(function($) {
      const arrayInformation = [];

      $("span.Counter").each(function(index, data) {
        arrayInformation[index] = parseInt($(data).text().trim().replace(/\n|\r/g, ""));
      });

      const organizations = $('div.border-top.py-3.clearfix').find('a').length;

      const commits = $("h2.f4.text-normal.mb-2").text().trim().match(/\d+,?\d+/g);

      const commitInteger =  commits ? parseInt(commits[0].replace(",", "").replace(".", "")) : 0;

      return  {
        stars: arrayInformation[1],
        followers: arrayInformation[2],
        following: arrayInformation[3],
        commits: commitInteger,
        organizations: organizations,
        commitsAverage: commitInteger > 0 ? parseFloat((commitInteger / 365).toFixed(1)) : 0
      };

    })
    .catch(function(err) {
      console.log('error', err);
    });
};

const getStars = (userName) => {

  var options = {
    uri: `https://github.com/${userName}`,
    transform: function(body) {
      return cheerio.load(body);
    }
  };

  return rp(options)
    .then(function($) {
      const arrayInformation = [];

      $("span.Counter").each(function(index, data) {
        arrayInformation[index] = parseInt($(data).text().trim().replace(/\n|\r/g, ""));
      });

      return  {
        stars: arrayInformation[1]
      };

    })
    .catch(function(err) {
      console.log('error', err);
    });
};

const getFollowers = (userName) => {

  var options = {
    uri: `https://github.com/${userName}`,
    transform: function(body) {
      return cheerio.load(body);
    }
  };

  return rp(options)
    .then(function($) {
      const arrayInformation = [];

      $("span.Counter").each(function(index, data) {
        arrayInformation[index] = parseInt($(data).text().trim().replace(/\n|\r/g, ""));
      });

      return  {
        followers: arrayInformation[2]
      };

    })
    .catch(function(err) {
      console.log('error', err);
    });
};

const getFollowing = (userName) => {

  var options = {
    uri: `https://github.com/${userName}`,
    transform: function(body) {
      return cheerio.load(body);
    }
  };

  return rp(options)
    .then(function($) {
      const arrayInformation = [];

      $("span.Counter").each(function(index, data) {
        arrayInformation[index] = parseInt($(data).text().trim().replace(/\n|\r/g, ""));
      });

      return  {
        following: arrayInformation[3]
      };

    })
    .catch(function(err) {
      console.log('error', err);
    });
};

const getCommits = (userName) => {

  var options = {
    uri: `https://github.com/${userName}`,
    transform: function(body) {
      return cheerio.load(body);
    }
  };

  return rp(options)
    .then(function($) {
      const commits = $("h2.f4.text-normal.mb-2").text().trim().match(/\d+,?\d+/g);
       const commitInteger =  commits ? parseInt(commits[0].replace(",", "").replace(".", "")) : 0;
      return  {
        commits: commitInteger
      };

    })
    .catch(function(err) {
      console.log('error', err);
    });
};

const getOrganizationQuantity = (userName) => {

  var options = {
    uri: `https://github.com/${userName}`,
    transform: function(body) {
      return cheerio.load(body);
    }
  };

  return rp(options)
    .then(function($) {

      const organizations = $('div.border-top.py-3.clearfix').find('a').length;

      return  {
        organizations: organizations
      };

    })
    .catch(function(err) {
      console.log('error', err);
    });
};

const getCommistAverage = (userName) => {

  var options = {
    uri: `https://github.com/${userName}`,
    transform: function(body) {
      return cheerio.load(body);
    }
  };

  return rp(options)
    .then(function($) {
      const commits = $("h2.f4.text-normal.mb-2").text().trim().match(/\d+,?\d+/g);

      const commitInteger =  commits ? parseInt(commits[0].replace(",", "").replace(".", "")) : 0;

      return  {
        commitsAverage: commitInteger > 0 ? parseFloat((commitInteger / 365).toFixed(1)) : 0
      };

    })
    .catch(function(err) {
      console.log('error', err);
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