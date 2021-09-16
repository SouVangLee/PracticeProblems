function reverseWordsInString(string) {
  let chars = string.split('');
	let result = [];
	let currentStr = "";
	for (let i = 0; i < chars.length; i++) {
		if (chars[i] !== " ") {
			currentStr += chars[i];
		} else {
			if (currentStr !== "") result.unshift(currentStr);
			currentStr = "";
			result.unshift(chars[i]);
		}
	}
	result.unshift(currentStr);
	
  return result.join('');
}