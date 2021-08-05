// Time Complexity: O(n) | Space Complexity: O(n)
function twoNumberSum(array, targetSum) {
  let tracker = {};
	let len = array.length;
	for (let i = 0; i < len; i++) {
		let difference = targetSum - array[i];
		if (tracker[difference] === undefined) {
			tracker[array[i]] = difference;
		} else {
			return [array[i], difference];
		}
	}
	return [];
}