function balancedBrackets(string) {
	const stack = [];
	const allBrackets = "{}[]()".split('');
	const match = { 
		"}": "{",
		"]": "[", 
		")": "(" 
	};
	
	for (const char of string) {
		if (allBrackets.includes(char)) {
			if (!match[char]) stack.push(char);
			else {
				const leftBracket = stack[stack.length - 1];
				if (match[char] === leftBracket) stack.pop();
				else stack.push(char);
			}
		}
		continue;
	}
	return stack.length === 0;
}