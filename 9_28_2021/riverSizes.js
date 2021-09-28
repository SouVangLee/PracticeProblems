function riverSizes(matrix) {
	const visited = matrix.map(row => row.map(value => false));
	const riverLengths = [];
	
	for (let row = 0; row < matrix.length; row++) {
		for (let col = 0; col < matrix[0].length; col++) {
			if (visited[row][col]) continue;
			checkRiver(row, col, matrix, visited, riverLengths);
		}
	}
	return riverLengths;
}

const checkRiver = (row, col, matrix, visited, riverLengths) => {
	let length = 0;
	const queue = [[row, col]];
	
	while (queue.length) {
		[row, col] = queue.shift();
		
		if (visited[row][col]) continue;
		if (matrix[row][col] === 1) {
			length++;
			if (matrix[row + 1] !== undefined && !visited[row + 1][col]) {
				queue.push([row + 1, col]);
			}
			if (matrix[row - 1] !== undefined && !visited[row - 1][col]) {
				queue.push([row - 1, col]);
			}
			if (matrix[row][col + 1] !== undefined && !visited[row][col + 1]) {
				queue.push([row, col + 1]);
			}
			if (matrix[row][col - 1] !== undefined && !visited[row][col - 1]) {
				queue.push([row, col - 1]);
			}
		}
		visited[row][col] = true;
	}
	if (length > 0) riverLengths.push(length);
}
