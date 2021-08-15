function findThreeLargestNumbers(array) {
  let first = -Infinity;
	let second = -Infinity;
	let third = -Infinity;
	let prev;
	for (const ele of array) {
		if (ele >= first) {
			prev = first;
			first = ele;
		} else prev = ele;
		if (prev >= second) {
			let temp = second;
			second = prev;
			prev = temp;
		}
		third = (prev >= third) ? prev : third;
	}
	return [third, second, first];
}