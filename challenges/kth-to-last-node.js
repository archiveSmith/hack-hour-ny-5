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
 * Edge Cases :
 * K < 1 -
 * list is not an object
 * K / link list is not defined
 *
 */

function Node(val) {
  this.value = val;
  this.next = null;
  //this.prev = null; this.prev = this.head
}

function kthToLastNode(k, head) { //return count - (k - 1) /--> O(2N) / SO(N)
	let [nodeCount, targetNode, nodeChecks] = [0, /*yet to be defined*/ , head];
	if(k < 1 || !k || !head || Number.isInteger(k) || typeof head !== "object") return undefined

	while(nodeChecks.next !== null){
		nodeChecks = nodeChecks.next;
		nodeCount++;
	} 
	if(height < k) return undefined
	for(let i = 0; i <= nodeCount - k; i++) {
	  head = head.next
      targetNode = head; 
	}
	return targetNode;
}

// function kthToLastNode(k, head) { //return count - (k - 1) /--> T: O(N) / S: O(N)
// 	if(k < 1 || !k || !head || Number.isInteger(k) || typeof head !== "object") return undefined
// 	let array = [];
// 	while(head) {
// 		array.push(push.value);
// 		head = head.next
// 	}
// 	if(array.length - k) return undefined;
// 	return array[array.length -k]
// }

//Shane Yao 
// function kthToLastNode(k, head) { //return count - (k - 1) /--> T: O(N) / S: O(N)
// 	if(k < 1 || !k || !head || Number.isInteger(k) || typeof head !== "object") return undefined;
// 	let current1 = head;
// 	let current2 = head;
// 	let height = 1;
// 	while(height <= k){
// 		height++;
// 		current1 = current1.next
// 	}
// 	while(current1) {
// 		current1 = current1.next;
// 		current2 = current2.next;
// 	}
// 	return current2.value;
// }











module.exports = {Node: Node, kthToLastNode: kthToLastNode};
