/**
 * Write a function for reversing a linked list.
 * Your function will have one input: the head of the list
 * Your function should return the new head of the list
 *
 * BONUS:
 * Do it in place
 *
 */

function Node(value) {
    this.value = value;
    this.next = null;
}

function reverseLinkedList(head) {
  let currentNode = head;
  let values = [];
  while(currentNode) {
    values.push(currentNode.this.value);
    currentNode = currentNode.this.next;
  }
  head = new Node(values[values.length - 1]);
  currentNode = head;
  for (let i = values.length - 2; i >= 0; i--) {
    currentNode.next = new Node(values[i]);
    if (currentNode.next) currentNode = currentNode.next;
  }
  return head;
}

module.exports = {Node: Node, reverseLinkedList: reverseLinkedList};
