const _ = require('lodash');

const getContributorsInformation = (data) => {
	const contributionsAmount = data ? _.filter(data, { 'isContributor': true}).length : 0;
	return {
		forks: data ? data.length : 0,
		contrinutions: data || [],
		contributionsAmount: contributionsAmount
	};
}

module.exports = {
	getContributorsInformation,
};