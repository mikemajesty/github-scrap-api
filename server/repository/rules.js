const _ = require('lodash');

const fullRules = (model, rules) => {
	/*{
	"username": "mikemajesty",
	"relevantrepository": {
		"stars": 5,
		"fork": 1
	}
} */
	const rule = {
		stars: rules.stars || 10,
		forks: rules.forks || 1
	};

	const sumStarAndFork = _.max(_.map(model, (value) => {
		return (parseInt(value.stars) + parseInt(value.forks));
	}));

	const groupRepository = _.groupBy(model, function (value) {
		return value.language;
	});

	const stars = _.sumBy(model, (value) => {
		return parseInt(value.stars);
	});

	const language = _.orderBy(groupRepository, 'length', 'desc')[0];

	const bestRepositoty = _.find(model, (value) => {
		return (parseInt(value.stars) + parseInt(value.forks)) === sumStarAndFork;
	});

	const relevantsRepositories = _.filter(model, (value) => {
		return value.stars >= rule.stars && value.forks >= rule.forks;
	});

	const forks = _.sumBy(model, (value) => {
		return parseInt(value.forks);
	});

	const data = {
		stars,
		forks,
		language: language ? language[0].language : 'noob',
		bestRepositoty: bestRepositoty || 'noob',
		repositories: {
			full: model,
			relevants: relevantsRepositories
		}
	};

	return data;
};

const getStars = (model) => {

	const stars = _.sumBy(model, (value) => {
		return parseInt(value.stars);
	});

	const data = {
		stars
	};

	return data;
};

const getForks = (model) => {

	const forks = _.sumBy(model, (value) => {
		return parseInt(value.forks);
	});

	const data = {
		forks
	};

	return data;
};

const getBestRepositoty = (model) => {

	const sumStarAndFork = _.max(_.map(model, (value) => {
		return (parseInt(value.stars) + parseInt(value.forks));
	}));

	const bestRepositoty = _.find(model, (value) => {
		return (parseInt(value.stars) + parseInt(value.forks)) === sumStarAndFork;
	});

	const data = {
		bestRepositoty
	};

	return data;
};

const getLanguage = (model) => {

	const groupRepository = _.groupBy(model, function (value) {
		return value.language;
	});

	const language = _.orderBy(groupRepository, 'length', 'desc')[0];

	const data = {
		language: language ? language[0].language : 'noob'
	};

	return data;
};

const getAllLanguages = (model) => {

	const languages = _.orderBy(model, 'language', 'asc');

	const data = {
		repositories: languages || 'noob'
	};

	return data;
};

const getAllNames = (model) => {

	const names = _.orderBy(model, 'name', 'asc');

	const data = {
		repositories: names || 'noob'
	};

	return data;
};

module.exports = {
	fullRules,
	getStars,
	getForks,
	getBestRepositoty,
	getLanguage,
	getAllLanguages,
	getAllNames
};