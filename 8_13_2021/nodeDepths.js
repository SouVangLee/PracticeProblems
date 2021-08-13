function nodeDepths(root) {
	if (!root) return 0;
	let result = 0;
	let queue = [{node: root, depth: 0}];
	while (queue.length) {
		const { node, depth } = queue.shift();
		result += depth;
		if (node.left) queue.push({node: node.left, depth: depth + 1});
		if (node.right) queue.push({node: node.right, depth: depth + 1});
	}
	return result;
}

class BinaryTree {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}