function minHeightBst(array) {
	const startIdx = 0;
	const endIdx = array.length - 1;
	const midIdx = Math.floor((startIdx + endIdx) / 2);
	const root = new BST(array[midIdx]);
	const queue = [[root, startIdx, midIdx, endIdx]];

	while (queue.length) {
		const [currentNode, startIdx, midIdx, endIdx] = queue.shift();
		const leftEndIdx = midIdx - 1;
		const leftMidIdx = Math.floor((startIdx + leftEndIdx) / 2);
		const leftNode = new BST(array[leftMidIdx]);

		if (startIdx < leftEndIdx) {
			currentNode.left = leftNode;
			queue.push([leftNode, startIdx, leftMidIdx, leftEndIdx]);			
		} else if (startIdx === leftEndIdx) {
			currentNode.left = leftNode;
		}

		const rightStartIdx = midIdx + 1;
		const rightMidIdx = Math.floor((rightStartIdx + endIdx) / 2);
		const rightNode = new BST(array[rightMidIdx]);
		
		if (endIdx > rightStartIdx) {
			currentNode.right = rightNode;
			queue.push([rightNode, rightStartIdx, rightMidIdx, endIdx]);			
		} else if (endIdx === rightStartIdx) {
			currentNode.right = rightNode;
		}
	}
	
	return root;
}

class BST {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }

  insert(value) {
    if (value < this.value) {
      if (this.left === null) {
        this.left = new BST(value);
      } else {
        this.left.insert(value);
      }
    } else {
      if (this.right === null) {
        this.right = new BST(value);
      } else {
        this.right.insert(value);
      }
    }
  }
}

