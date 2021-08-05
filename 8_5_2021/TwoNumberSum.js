/*
Example:
array = [2, 6, 3, -4, -7, -10]
targetSum = -1;

Output: [3, 4] || [4, 3] (Order does not matter)
*/

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