/*
 24. Swap Nodes in Pairs
 Given a linked list, swap every two adjacent nodes and return its head. 
 You must solve the problem without modifying the values in the list's nodes (i.e., only nodes themselves may be changed.)

 Example:
 1 -> 2 -> 3 -> 4

 Output:
 2 -> 1 -> 4 -> 3
*/

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
 var swapPairs = function(head) {
  let current = head;
  let newHead = head && head.next ? head.next : head;
  
  while (current && current.next) { 
      let next = current.next;
      let newCurrent = next.next;
      
      next.next = current;
      current.next = newCurrent && newCurrent.next ? newCurrent.next : newCurrent;
      current = newCurrent;
      
  }
  
  return newHead;
};