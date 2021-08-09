//Time Complexity: O(logn) | Space Complexity: O(1);
function findClosestValueInBST(tree, target) {
	let minDiff = Infinity;
	let result = Infinity;
	let current = tree;
	while (current) {
		let currentDiff = Math.abs(current.value - target);
		if (currentDiff < minDiff) {
			minDiff = currentDiff;
			result = current.value;
		}
		if (current.value > target) current = current.left;
		else current = current.right;
	}
	return (result !== Infinity || (!tree && result === Infinity)) ? result : tree.value;
}

class BST {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}