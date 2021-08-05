//Time Complexity: O(n) | Space Complexity: O(1)
function isValidSubsequence(array, sequence) {
	let len = array.length;
	let j = 0;
	for (let i = 0; i < len; i++) {
		if (array[i] === sequence[j]) j++;
	}
	return j === sequence.length;
};
