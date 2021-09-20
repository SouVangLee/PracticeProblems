function sunsetViews(buildings, direction) {
  let startIdx = direction === "EAST" ? buildings.length - 1 : 0;
	const iterate = direction === "EAST" ? -1 : 1;
	let tallest = 0;
	const result = [];
	
	while (startIdx >= 0 && startIdx < buildings.length) {
			const current = buildings[startIdx];
			if (current > tallest) {
				tallest = current;
				result.push(startIdx);
			}
		startIdx += iterate;
	}
	
	if (direction === "EAST") return result.reverse();
  return result;
}