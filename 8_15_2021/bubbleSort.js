function bubbleSort(array) {
  let sorted = false;
	while (!sorted) {
		sorted = true;
		let len = array.length;
		for (let i = 0; i < len - 1; i++) {
			if (array[i] > array[i + 1]) {
				[array[i], array[i + 1]] = [array[i + 1], array[i]];
				sorted = false;
				break;
			}
		}
	}
	return array;
}