const _ = require('lodash');

const getMaxCommits = (data) => {
	return _.maxBy(data, 'commit');
};

const getCurrentStreak = (res) => {
	let currentStreak = []
	let lastCommit = 0
	res.forEach(function (data, index) {
		const date = data.date
		const currentCommit = data.commit
		if (currentCommit > 0 && (lastCommit > 0 || currentStreak.length === 0)) {
			currentStreak.push({
				date: date,
				commit: currentCommit
			})
		} else {
			currentStreak = []
		}
		lastCommit = data.commit;
	})
	return currentStreak.length;

}
module.exports = {
	getMaxCommits,
	getCurrentStreak
};