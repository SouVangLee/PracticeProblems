function getNthFib(n) {
	let current = 0;
	let next = 1;
	for (let i = 3; i <= n; i++) {
		const nextFib = current + next;
		current = next;
		next = nextFib;
	}
	return n <= 1 ? current : next;
}