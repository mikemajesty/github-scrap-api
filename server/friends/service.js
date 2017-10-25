const rp = require('request-promise');

const getFriends = (userName) => {
	var options = {
    uri: `https://api.github.com/users/${userName}/following?per_page=100&client_id=${process.env.PUBLIC_KEY}&client_secret=${process.env.SECRET_KEY}`,
    headers: {
        'User-Agent': 'Awesome-Octocat-App'
    },
    json: true
	};
	console.log(options.uri)
	const friends = rp(options)
    .then(function (repos) {
			return repos;
    })
    .catch(function (err) {
         console.log(err);
    });
		return friends;
};

module.exports = {
	getFriends
};