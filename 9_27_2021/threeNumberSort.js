function threeNumberSort(array, order) {
	let j = 0;
  for (let i = 0; i < order.length - 1; i++) {
		const num = order[i];
		for (let k = j; k < array.length; k++) {
			if (array[k] === num) {
				[array[k], array[j]] = [array[j], array[k]];
				j++;
			}
		}
	}
	return array;
}

function threeNumberSort(array, order) {
  const firstValue = order[0];
	const secondValue = order[1];
	
	let firstIdx = 0;
	let secondIdx = 0;
	let thirdIdx = array.length - 1;
	
	while (secondIdx <= thirdIdx) {
		const value = array[secondIdx];
		
		if (value === firstValue) {
			swap(firstIdx, secondIdx, array);
			firstIdx++;
			secondIdx++;
		} else if (value === secondValue) {
			secondIdx++;
		} else {
			swap(secondIdx, thirdIdx, array);
			thirdIdx -= 1;
		}
	}
	return array;
}

function swap(i, j, array) {
	[array[i], array[j]] = [array[j], array[i]];
}

function threeNumberSort(array, order) {
  const firstValue = order[0];
  const thirdValue = order[2];

  let firstIdx = 0;
  for (let i = 0; i < array.length; i++) {
    if (array[i] === firstValue) {
      swap(firstIdx, i, array);
      firstIdx++;
    }
  }

  let thirdIdx = array.length - 1;
  for (let j = array.length - 1; j >= 0; j--) {
    if (array[j] === thirdValue) {
      swap(thirdIdx, j, array);
      thirdIdx--;
    }
  }

  return array;
}