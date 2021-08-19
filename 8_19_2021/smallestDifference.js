function smallestDifference(arrayOne, arrayTwo) {
	arrayOne.sort((a, b) => a - b);
	arrayTwo.sort((a, b) => a - b);
	
	let i = 0;
	let j = 0;
	let smallestDiff = Infinity;
	const result = [];
	while (i < arrayOne.length && j < arrayTwo.length) {
		let currentDiff = Math.abs(arrayOne[i] - arrayTwo[j]);
		if (currentDiff < smallestDiff) {
			smallestDiff = currentDiff
			result[0] = arrayOne[i];
			result[1] = arrayTwo[j];
		}
		arrayOne[i] > arrayTwo[j] ? j++ : i++; 
	}
	return result;
}