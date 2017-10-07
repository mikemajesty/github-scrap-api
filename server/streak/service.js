const rp = require('request-promise');
const cheerio = require('cheerio');

const getStreakBody = (userName) => {
  const options = {
    uri: `https://github.com/${userName}`,
    transform: function(body) {
      return cheerio.load(body);
    }
  };

  return rp(options)
    .then(function($) {

      let currentStreak = [];

      $('.day').each(function(index) {

        const date = $(this).prop('data-date');
        const commit = $(this).prop('data-count');

        currentStreak.push({
          date: date,
          commit: commit
        });

      });

      return currentStreak;
    })
    .catch(function(err) {
      console.log('error', err);
    });
};

module.exports = {
  getStreakBody
};