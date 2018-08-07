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

function Node(val) {
  this.value = val;
  this.next = null;
}

function addLinkedList(l1, l2) {
  let curNode1 = l1;
  let curNode2 = l2;
  let sumLL;
  let curSumNode;
  let carry = false;
  while (curNode1 || curNode2) {
    let curSum = 0;
    if (curNode1) {
      curSum += curNode1.value;
      curNode1 = curNode1.next;
    }
    if (curNode2) {
      curSum += curNode2.value;
      curNode2 = curNode2.next;
    }
    if (carry) {
      curSum++;
      carry = false;
    }
    if (curSum >= 10) {
      curSum -= 10;
      carry = true;
    }
    if (sumLL) {
      curSumNode.next = new Node(curSum);
      curSumNode = curSumNode.next;
    }
    else {
      sumLL = new Node(curSum);
      curSumNode = sumLL;
    }
  }
  if (carry) {
    curSumNode.next = new Node(1);
  }
  return sumLL;
}

module.exports = {Node: Node, addLinkedList: addLinkedList};
