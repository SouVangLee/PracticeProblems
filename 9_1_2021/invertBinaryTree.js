function invertBinaryTree(tree) {
  const queue = [tree];
	while (queue.length) {
		const current = queue.shift();
		if (!current) continue;
		const newRight = current.left;
		current.left = current.right;
		current.right = newRight;
		queue.push(current.left);
		queue.push(current.right);
	}
	return tree;
}