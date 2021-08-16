function firstNonRepeatingCharacter(string) {
	let hash = {};
	for (let i = 0; i < string.length; i++) {
		hash[string[i]] = (hash[string[i]] === undefined) ? false : true;
	}
	
	for (let j = 0; j < string.length; j++) {
		if (!hash[string[j]]) return j;
	}
	return -1;
}