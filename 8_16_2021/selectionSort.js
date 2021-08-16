function selectionSort(array) {
	for (let i = 0; i < array.length; i++) {
		let minEle = array[i];
		let idx = i
		for (let j = i + 1; j < array.length; j++) {
			if (minEle > array[j]) {
				minEle = array[j];
				idx = j;
			}
		}
		[array[i], array[idx]] = [array[idx], array[i]];
	}
	return array;
}