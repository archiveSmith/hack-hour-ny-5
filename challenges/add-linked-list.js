/* You have two numbers represented by linked lists. Each node contains a single digit. The digits
 * are stored in reverse order, such that the 1's digit is at the head of the list. Write
 * a function that adds the two numbers and returns the sum as a linked list with the same
 * structure.
 * EXAMPLE
 * Input: (2 -> 1 -> 5) + (5 -> 9 -> 2)
 * Output: 7 -> 0 -> 8
 *
 * The 7 is the ones digit (2 + 5).
 * The 0 is the tens digit (1 + 9, carry the 1).
 * The 8 is the hundreds digit (1 carried over + 5 + 2).
 *
 */

console.log('=================RUNNING THE PROGRAM!==================')

function Node(val) {
  this.value = val;
  this.next = null;
}

function addLinkedList(l1, l2) {
  let currL1 = l1;
  console.log('currL1 before while: ', currL1);
  let currL2 = l2;
  console.log('currL2 before while: ', currL2);
  let newNode = new Node(currL1.value + currL2.value);
  console.log('newNode before while: ', newNode);
  while (currL1 !== null && currL2 !== null) {
    newNode.next = new Node(currL1.next + currL2.next);
    console.log('newNode in while: ', newNode); 
    newNode = newNode.next;
    currL1 = currL1.next;
    currL2 = currL2.next;
  }
  return newNode;
}

let test1 = new Node(2);
test1.next = new Node(3);
test1.next.next = new Node(5);

console.log('test1: ', test1);

let test2 = new Node(4);
test2.next = new Node(6);
test2.next.next = new Node(7);

console.log('test2: ', test2);

console.log('addLinkedList: ', addLinkedList(test1, test2));

module.exports = {Node: Node, addLinkedList: addLinkedList};
