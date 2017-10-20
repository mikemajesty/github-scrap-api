const information = require('../information/service');

const getFollowers = (userName) => {
	const followers = information.getFollowers('felipebernardes').then(data => {
		return data.followers;
	});

	return new Promise(function(resolve, reject){ resolve(true); });
};

module.exports = {
	getFollowers
};