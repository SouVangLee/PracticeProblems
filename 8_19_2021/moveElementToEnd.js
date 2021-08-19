function moveElementToEnd(array, toMove) {
	let idx = 0;
  for (let i = 1; i < array.length; i++) {
		if (array[i] !== toMove) {
			[array[i], array[idx]] = [array[idx], array[i]];
			idx++;
		}
	}
	return array;
}