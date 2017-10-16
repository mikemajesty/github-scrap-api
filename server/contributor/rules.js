const _ = require('lodash');

const getContributorsInformation = (data) => {
	const contributionsAmount = data ? _.filter(data, {
		'isContributor': true
	}).length : 0;
	return {
		forks: data ? data.length : 0,
		contrinutions: data || [],
		contributionsAmount: contributionsAmount
	};
};

const getForks = (data) => {
	return {
		forks: data.map(r => {
			return {
				'name': r.repository
			}
		})
	};
};

const getContributionAmount = (data) => {
	const contributionsAmount = data ? _.filter(data, {
		'isContributor': true
	}).length : 0;
	return {
		contributionsAmount: contributionsAmount
	};
};

const getContributionInformation = (data) => {
	return {
		information: data || [],
	};
};

module.exports = {
	getContributorsInformation,
	getForks,
	getContributionAmount,
	getContributionInformation
};