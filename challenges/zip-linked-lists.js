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
  // I am trying to think about how to weave the l1 and l2 together using the Node constructor. I am guessing that with the info we were supplied with we need to insert a new Node() that is a clone of the 1st, 2nd, etc node in l2 INTO the every-other spot in l1.

  // this is a challenge to do this w/o a wrapper...

  // first create the head of a new return LL with head value of l1:
  
  // maybe like this?
  // let linkedlist = new Node(l1.head.value)

  // or maybe like this instead?
  let llHead = new Node(l1.head.value);

  llHead.next = new Node(l2.head.value);

  while (llHead.head.next)

  //ran out of time but I feel like I'm on a roll with this approach!! :( :(  ))
};



module.exports = {Node: Node, zip: zip};
