function threeNumberSum(array, targetSum) {
  let sorted = array.sort((a, b) => a - b);
	const result = [];
	
	for (let i = 0; i < sorted.length - 2; i++) {
		let left = i + 1;
		let right = sorted.length - 1;
		while (left < right) {
			const currentSum = sorted[i] + sorted[left] + sorted[right];
			if (currentSum === targetSum) {
				result.push([sorted[i], sorted[left], sorted[right]]);
				left++;
				right--;
			} else if (currentSum > targetSum) right--;
				else if (currentSum < targetSum) left++;
		}
	}
	return result;
}
