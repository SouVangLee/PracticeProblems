function generateDocument(characters, document) {
  let allChars = {};
	for (const char of characters) {
		if (!allChars[char]) allChars[char] = 0;
		allChars[char]++;
	}
	
	for (const char of document) {
		if (!allChars[char]) return false;
		allChars[char]--;
	}
	
  return true;
}