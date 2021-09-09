function mergeOverlappingIntervals(matrix) {
	const sortedMatrix = matrix.sort((a,b) => a[0] - b[0]);
  const result = [sortedMatrix[0].slice()];
	
	for (let i = 1; i < sortedMatrix.length; i++) {
		const lastIdx = result.length - 1
		const [lastStart, lastEnd] = result[lastIdx];
		const [currentStart, currentEnd] = sortedMatrix[i];
		
		if (currentStart >= lastStart && currentStart <= lastEnd) {
			let newEnd = Math.max(lastEnd, currentEnd);
			result[lastIdx] = [lastStart, newEnd]
		} else if (currentEnd >= lastStart && currentEnd <= lastEnd) {
			let newStart = Math.min(lastStart, currentStart);
			result[lastIdx] = [newStart, lastEnd];
		} else {
			result.push(sortedMatrix[i]);
		}
	}
  return result;
}