function spiralTraverse(array) {
  let startRow = 0;
	let startCol = 0;
	let endCol = array[0].length - 1;
	let endRow = array.length - 1;
	let currentRow = startRow;
	let currentCol = startCol;
	let dir = "right";
	const result = [];
	while (startRow <= endRow && startCol <= endCol) {
		result.push(array[currentRow][currentCol]);
		if (dir === 'right' && currentCol === endCol) {
			dir = 'down';
			startRow++;
		} else if (dir === 'down' && currentRow === endRow) {
			dir = 'left';
			endCol--;
		} else if (dir === 'left' && currentCol === startCol) {
			dir = 'up';
			endRow--;
		} else if (dir === 'up' && currentRow === startRow) {
			dir = 'right';
			startCol++;
		}
		
		switch (dir) {
			case 'right':
				currentCol++;
				break;
			case 'down':
				currentRow++;
				break;
			case 'left':
				currentCol--;
				break;
			case 'up':
				currentRow--;
				break;
		}
	}
	return result;
}
