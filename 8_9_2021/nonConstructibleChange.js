function nonConstructibleChange(coins) {
  let sorted = coins.sort((a, b) => a - b);
	let change = 0;
	for (let i = 0; i < sorted.length; i++) {
		if (change + 1 >= sorted[i]) {
			change += sorted[i];
		} else {
			return change + 1;
		}
	}
	return change + 1;
}