/**
 * Write a function for reversing a linked list.
 * Your function will have one input: the head of the list
 * Your function should return the new head of the list
 *
 * BONUS:
 * Do it in place
 *
 */
// 1. transverse through the linked list and set it equal to the head of the new linked list
function Node(value) {
  this.value = value;
  this.next = null;
}
// { Node: {value: 10, next: {value: 20, next: {value 30}}}}
function reverseLinkedList(head) {
  let swappedNode = (currentNode = head);

  // loops until this.next === null
  while (head) {
    head = head.next; // tranverses to the next node
    if (!currentNode) {
      currentNode.next = null;
    } // head of the list becomes (value : value, next: null)
    swappedNode = head; // swappedNode becomes the next Node i.e Node 2
    swappedNode.next = current; // node 2.next === node 1
    currentNode = swappedNode;
  }
}

module.exports = { Node: Node, reverseLinkedList: reverseLinkedList };
