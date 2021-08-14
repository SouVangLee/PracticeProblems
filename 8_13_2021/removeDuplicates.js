class LinkedList {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

function removeDuplicates(linkedList) {
	let current = linkedList;
	while (current) {
		let nextNode = current.next;
		while (nextNode && current.value === nextNode.value) {
			nextNode = nextNode.next;
		}
		current.next = nextNode;
		current = nextNode;
	}
	return linkedList;
}