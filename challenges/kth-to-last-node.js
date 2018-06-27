/**
 * Write a function that takes two parameters, an integer and the head of a
 * singly linked list, and returns the VALUE on the kth to last node in the list.
 *
 * const a = new Node('A');
 * const b = new Node('B');
 * const c = new Node('C');
 * const d = new Node('D');
 * const e = new Node('E');
 *
 * a.next = b;
 * b.next = c;
 * c.next = d;
 * d.next = e;
 *
 * kthToLastNode(2, a); -> returns 'D' (the value on the second to last node)
 */

function Node(val) {
  this.value = val;
  this.next = null;
}

function kthToLastNode(k, head) {
<<<<<<< HEAD
  let currentValue = head.value;
  let nextNode = head.next;
  let result = [];
  while (currentValue) {
    result.push(currentValue);
    currentValue = nextNode.value;
    if (nextNode.next === null) {
      result.push(nextNode.value);
      break;
    } else {
    nextNode = nextNode.next;
    }
  }
  return result[result.length - k];
=======

>>>>>>> 7654d268664d32e59e1ae2b421fd9dbf7a64e9f3
}

module.exports = {Node: Node, kthToLastNode: kthToLastNode};
