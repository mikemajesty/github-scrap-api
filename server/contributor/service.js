const rp = require('request-promise');
const cheerio = require('cheerio');

const getPullRequest = (userName) => {
  const options = {
    uri: `https://github.com/${userName}?utf8=%E2%9C%93&tab=repositories&q=&type=fork`,
    transform: function (body) {
      return cheerio.load(body);
    }
  };

  const pagination = rp(options)
    .then(function ($) {

      const paginator = $("#user-repositories-list > div.paginate-container > div.pagination");

      let paginatorAmount = [];
      paginatorAmount.push(1);
      $(paginator).find('a').filter(function (i, el) {
        return $(this).attr('class') !== 'next_page';
      }).each(function (index, data) {
        paginatorAmount.push(parseInt($(data).text().trim().replace(/\n|\r/g, "")));
      });
      return paginatorAmount;
    })
    .catch(function (err) {
      console.log(err)
    });

  return new Promise(function (resolve, reject) {
    const allPages = pagination.then(function (pages) {
      let promises = null;
      const linguagens = [];
      console.log('------------', pages)
      promises = pages.reduce((promiseChain, page) => {
        const optionsPaginator = {
          uri: `https://github.com/${userName}?language=&page=${page}&q=&tab=repositories&type=fork&utf8=%E2%9C%93`,
          transform: function (body) {
            return cheerio.load(body);
          }
        };
        return promiseChain.then(() => rp(optionsPaginator)
          .then(function ($) {
            $('li').filter(function (i, el) {
              return $(this).attr('itemprop') === 'owns';
            }).each(function (index) {
              linguagens.push({
                language: $(this).find('h3').find('a').html().replace(/\s/g, '')
              });
            });
            return linguagens;
          })
          .catch(function (err) {
            console.log('error', err);
          }));

      }, Promise.resolve());
      return promises;
    }).catch(err => reject(err));

    allPages.then(data => {
      const getAll = [];
      let p = null;
      p = data.reduce((promiseChain, repository) => {
        const contributorOption = {
          uri: `https://github.com/${userName}/${repository.language}/commits?author=celso-wo`,
          transform: function (body) {
            return cheerio.load(body);
          }
        };

        return promiseChain.then(() => rp(contributorOption)
          .then(function ($) {
            const conditional = $('ol').html() != null;
            getAll.push({
              isContributor: conditional,
              repository: repository.language
            });
            return getAll;
          }).catch(function (err) {
            console.log('error', err);
          })
        );
      }, Promise.resolve());
      resolve(p);
    });
  });
};

module.exports = {
  getPullRequest
};