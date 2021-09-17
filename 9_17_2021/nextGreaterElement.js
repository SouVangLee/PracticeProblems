function nextGreaterElement(array) {
  const result = [];
	let i = 0;
	let j = i + 1;
	const len = array.length;
	
	while (result.length < len) {
		if (j === len) j = 0;
		let current = array[i];
		let next = array[j];
		
		if (next > current) {
			result.push(next);
			i++;
			j = i + 1;
		} else if (j === i) {
			result.push(-1);
			i++;
			j = i + 1;
		} else {
			j++;		
		}
	}
  return result;
}

