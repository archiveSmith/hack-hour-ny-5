/* Merge two linked lists so that their nodes alternate. Let the first node of the zipped list be
 * the first node of the first argument, if it exists.
 * Implement the linked list using only a Node class. No need for a wrapper LinkedList class
 *
 * BONUS: Do this in place
 */

function Node(val) {
  this.value = val;
  this.next = null;
}

function zip(l1, l2) {
  let current = l1.this;
  let current2 = l2.this;
  while(current.next || current2.next) {
    let temp1 = current.next; //node # 3 = l1.next
    let temp2 = current2.next; //node # 4 = l2.next
    current.next = l2.this; //ref from l1-1 to l2-1
    current2.next = temp1; // ref from l2-1 to l1-2
    current = temp1;
    current2 = temp2;
  }
  return l1;
};

module.exports = {Node: Node, zip: zip};
