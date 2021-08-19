class LinkedList {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

function shiftLinkedList(head, k) {
  let length = 1;
	let oldTail = head;
	while (oldTail.next) {
		length++;
		oldTail = oldTail.next;
	}
	
	const offset = Math.abs(k) % length;
	if (offset === 0) return head;
	const newTailPos = k > 0 ? length - offset : offset;
	let newTail = head;
	for (let i = 1; i < newTailPos; i++) {
		newTail = newTail.next;
	}
	
	const newHead = newTail.next;
	newTail.next = null;
	oldTail.next = head;
	
	return newHead;
}