function searchInSortedMatrix(matrix, target) {
  for (let row = 0; row < matrix.length; row++) {
		const currentRow = matrix[row];
		for (let col = 0; col < currentRow.length; col++) {
			const currentNum = currentRow[col];
			if (currentNum === target) return [row, col];
		}
	}
	return [-1, -1];
}

function searchInSortedMatrix(matrix, target) {
  let row = 0;
	let col = matrix[0].length - 1;
	while (row < matrix.length && col >= 0) {
		if (matrix[row][col] > target) {
			col--;
		} else if (matrix[row][col] < target) {
			row++;
		} else {
			return [row, col];
		}
	}
	return [-1, -1]
}
