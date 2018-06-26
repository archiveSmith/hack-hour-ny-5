/**
 * Write a function that takes two parameters, an integer and the head of a
 * singly linked list, and returns the VALUE on the kth to last node in the list.
 *
 * const a = new Node('A'); a: {val : "A" next: b{}}
 * const b = new Node('B'); b: {val : "B" next: c{}}
 * const c = new Node('C'); c: {val : "C" next: d{}}
 * const d = new Node('D'); d: {val : "D" next: e{}}
 * const e = new Node('E'); e: {val : "E" next: null}
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
  //this.prev = null; this.prev = this.head
}

function kthToLastNode(k, head) { //return count - (k - 1)
	let [nodeCount, targetNode, nodeChecks] = [0, /*yet to be defined*/ , head];

	while(nodeChecks.next !== null){
		nodeChecks = nodeChecks.next;
		nodeCount++;
	} 
	for(let i = 0; i < nodeCount - (k - 1); i++) {
	  head = head.next
      targetNode = head; 
	}
	return targetNode;
}

module.exports = {Node: Node, kthToLastNode: kthToLastNode};
