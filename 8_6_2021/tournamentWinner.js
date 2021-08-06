//Time Complexity: O(n) | Space Complexity: O(k) where k is the number of teams
function tournamentWinner(competitions, results) {
	const POINTS = 3;
	const HOME_TEAM_WON = 1;
	let tracker = {};
	competitions.forEach((competition, i) => {
		const WINNER = results[i];
		const [HOME, AWAY] = competition;
		if (WINNER === HOME_TEAM_WON) {
			if (tracker[HOME] === undefined) tracker[HOME] = 0;
			tracker[HOME] += POINTS;
		} else {
			if (tracker[AWAY] === undefined) tracker[AWAY] = 0;
			tracker[AWAY] += POINTS;
		}
	});
	
	let winner = '';
	let score = 0;
	for (let team in tracker) {
		if (tracker[team] > score) {
			score = tracker[team];
			winner = team;
		}
	}
	return winner;
}
