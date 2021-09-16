function groupAnagrams(words) {
	const sortedWords = words.map(word => {
		return word.split('').sort().join('');
	});
	
	let result = {};
	for (let i = 0; i < sortedWords.length; i++) {
		let word = sortedWords[i];
		if (!result[word]) {
			result[word] = [words[i]];
		} else {
			result[word].push(words[i]);
		}
	}
	
	return Object.values(result);
}