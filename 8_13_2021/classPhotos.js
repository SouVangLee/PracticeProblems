function classPhotos(redShirtHeights, blueShirtHeights) {
	redShirtHeights.sort((a, b) => a - b);
	blueShirtHeights.sort((a, b) => a - b);
	const RED_BACKROW = redShirtHeights[0] > blueShirtHeights[0] ? true : false;
  for (let i = 0; i < redShirtHeights.length; i++) {
		if (RED_BACKROW && (redShirtHeights[i] < blueShirtHeights[i])) return false; 
		else if (!RED_BACKROW && (blueShirtHeights[i] <= redShirtHeights[i])) return false;
	}
  return true;
}