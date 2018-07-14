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
  let head1 = l1;
  let head2 = l2;
  let next1 = head1.next;
  let next2 = head2.next;

  while (head1 && head2) {
    head1.next = head2;
    head1 = next1;
    next1 = next1.next;
    head2.next = head1;
    head2 = next2;
    next2 = next2.next;
  }
}

module.exports = { Node: Node, zip: zip };
