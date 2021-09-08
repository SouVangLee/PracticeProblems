function longestPeak(array) {
  let longest = 0;
	for (let i = 0; i < array.length - 1; i++) {
		let prev = array[i - 1];
		let current = array[i];
		let next = array[i + 1];
		
		if (current > prev && current > next) {
			let leftIdx = i - 1;
			for (leftIdx; leftIdx > 0; leftIdx--) {
				if (array[leftIdx] === undefined || array[leftIdx - 1] >= array[leftIdx]) break;
			}
			
			let rightIdx = i + 1;
			for (rightIdx; rightIdx < array.length; rightIdx++) {
				if (array[rightIdx + 1] === undefined || array[rightIdx + 1] >= array[rightIdx]) break;
			}
			longest = Math.max(longest, (rightIdx - leftIdx + 1));
			i = rightIdx;
		} else {
			continue;
		}
	}
	return longest;
}
