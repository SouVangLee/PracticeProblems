class BinaryTree {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

function branchSums(root) {
	let result = [];
	let sum = 0;
	calculateBranchSums(root, sum, result);
	return result;
}

function calculateBranchSums(node, sum, result) {
	if (!node) return;
	const currentSum = sum + node.value;
	if (!node.left && !node.right) {
		result.push(currentSum);
		return;
	}
	
	calculateBranchSums(node.left, currentSum, result);
	calculateBranchSums(node.right, currentSum, result);
}