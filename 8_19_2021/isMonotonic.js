function isMonotonic(array) {
	if (array.length <= 2) return true;
	let prevSign = null;
	for (let i = 0; i < array.length - 1; i++) {
		const current = checkSign((array[i + 1] - array[i]));
		if (current === 'ZERO') continue;
		else {
			if (!prevSign) prevSign = current;
			else if (prevSign !== current) return false;
		}
	}
	return true;
}
	
function checkSign(num) {
	if (num > 0) return 'POSTIVE';
	else if (num === 0) return 'ZERO';
	return 'NEGATIVE';
}