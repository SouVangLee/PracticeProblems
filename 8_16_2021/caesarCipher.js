function caesarCipherEncryptor(string, key) {
  let alpha = 'abcdefghijklmnopqrstuvwxyz'.split('');
	let result = [];
	for (let i = 0; i < string.length; i++) {
		result.push(alpha[(alpha.indexOf(string[i]) + key) % 26]);
	}
	return result.join('');
}
