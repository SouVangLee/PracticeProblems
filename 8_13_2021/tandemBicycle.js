function tandemBicycle(redShirtSpeeds, blueShirtSpeeds, fastest) {
	redShirtSpeeds.sort((a, b) => a - b);
	blueShirtSpeeds.sort((a, b) => {
		if (fastest) return b - a;
		else return a - b;
	});
	let total = 0;
	redShirtSpeeds.forEach((redSpeed, i) => {
		const blueSpeed = blueShirtSpeeds[i]
		total += redSpeed > blueSpeed ? redSpeed : blueSpeed;
	})
  return total;
}
