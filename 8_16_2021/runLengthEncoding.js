function runLengthEncoding(string) {
  let count = 0;
	let prevChar = string[0];
	let result = [];
	for (let i = 0; i < string.length; i++) {
		if (prevChar !== string[i] || count === 9) {
			result.push(count);
			result.push(prevChar);
			count = 0;
		}
		count++;
		prevChar = string[i];
	}
	result.push(count);
	result.push(prevChar);
	return result.join('');
}
