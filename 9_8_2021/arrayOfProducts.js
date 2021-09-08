function arrayOfProducts(array) {
  const result = new Array(array.length).fill(1);
	
	let leftProduct = 1;
	for (let i = 0; i < array.length; i++) {
		result[i] = leftProduct;
		leftProduct *= array[i];
	}
	
	let rightProduct = 1;
	for (let j = array.length - 1; j >= 0; j--) {
		result[j] *= rightProduct;
		rightProduct *= array[j];
	}
	
	return result;
}

function arrayOfProducts(array) {
	const result = [];
	array.forEach((ele, i) => {
		let leftProduct = 1;
		let rightProduct = 1;
		let leftIdx = i - 1;
		while (leftIdx >= 0) {
			leftProduct *= array[leftIdx]
			leftIdx--;
		}
		
		let rightIdx = i + 1;
		while (rightIdx < array.length) {
			rightProduct *= array[rightIdx];
			rightIdx++;
		}
		
		result[i] = leftProduct * rightProduct;
	})
	return result;
}