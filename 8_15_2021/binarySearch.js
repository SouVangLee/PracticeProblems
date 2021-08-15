function binarySearch(array, target) {
	if (!array.length) return -1;
  let midIdx = Math.floor(array.length / 2);
	let midEle = array[midIdx];
	if (midEle === target) return midIdx;
	else if (midEle > target) return binarySearch(array.slice(0, midIdx), target);
	else {
		let newMidIdx = binarySearch(array.slice(midIdx + 1), target);
		return (newMidIdx === -1) ? -1 : newMidIdx + midIdx + 1;
	}
}