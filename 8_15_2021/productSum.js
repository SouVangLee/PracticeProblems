function productSum(array) {
	let depth = 1;
	return getProductSum(array, depth);
}

function getProductSum(array, depth) {
	let result = 0;
	for (const ele of array) {
		if (Array.isArray(ele)) {
			result += getProductSum(ele, depth + 1);
		} else {
			result += ele;
		}
	}
	return result * depth;
}