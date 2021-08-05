//Time Complexity: O(n) | Space Complexity: O(n)
function sortedSquaredArray(array) {
	let result = new Array(array.length);
	let i = 0;
	let j = array.length - 1;
	for (let k = result.length - 1; k >= 0; k--) {
		let iSquared = Math.pow(array[i], 2);
		let jSquared = Math.pow(array[j], 2);
		if (iSquared > jSquared) {
			result[k] = iSquared;
			i++;
		} else {
			result[k] = jSquared;
			j--;
		}
	}
	return result;
}