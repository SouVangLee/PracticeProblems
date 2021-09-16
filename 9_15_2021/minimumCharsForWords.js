function minimumCharactersForWords(words) {
  let resultCount = {};
	for (let i = 0; i < words.length; i++) {
		let word = words[i];
		let trackCount = {};
		word.split('').forEach(char => {
			if (!trackCount[char]) trackCount[char] = 0;
			trackCount[char]++;
		});
		
		resultCount = compareChars(trackCount, resultCount);
	}
	
	const result = [];
	for (let char in resultCount) {
		for (let i = 0; i < resultCount[char]; i++) {
			result.push(char);
		}
	}
	
  return result;
}

function compareChars(obj2, result) {
	for (let char in obj2) {
		if (!result[char] || (obj2[char] > result[char])) {
			result[char] = obj2[char]
		}
	}
	return result;
}