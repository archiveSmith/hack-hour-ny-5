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
  // loop through the linked list, front to back X

  // use a counter to keep track of how many nodes deep we are. when k accesses value at head, k = the number of total nodes in list. X

  // then need to use some arithmetic. If we have 5 nodes inc head and tail, and k = 4, we first need to count total nodes. Then take LL when counter = "length" - (length - k)
  // Need to, while looping, access val at that "index"
  let counter = 0;
  let currNode = head; // by creating a var we can change what is stored in currNode by using reassignment
  while (currNode.next !== null) { // WHILE the obj currNode (in this case head) is pointing to EXISTS
    console.log('currNode before re-assignment: ', head);
    counter = counter + 1; // increment counter
    currNode = currNode.next; // currNode is reassigned to the next node in list.
    console.log('head.next: ', head.next);
    console.log('currNode after re-assignment: ', head);
    if (counter = (counter - (counter - k))) { // - 1? //This is the node that we want the val from, including subtracting one depending how we loop
      return currNode.value;
    }
  }
}

// I think I need to loop twice and that's why it's not working the way I'd like. 

module.exports = {Node: Node, kthToLastNode: kthToLastNode};

let myHead = new Node(5);
console.log(myHead);
myHead.next = new Node(6);
console.log(myHead);
myHead.next.next = new Node(7);
console.log(myHead);
myHead.next.next.next = new Node(8);
console.log(myHead);
myHead.next.next.next.next = new Node(9);
console.log(myHead);

console.log('myHead.next: ', myHead.next);

console.log(kthToLastNode(1, myHead));
console.log(kthToLastNode(3, myHead));