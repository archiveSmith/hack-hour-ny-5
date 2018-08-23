/*
Create a doubly linked list with an add and remove method
 */

function LinkedList() {
  this.head = null;
  this.tail = null;
}

function Node(val) {
  this.val = val;
  this.next = null;
  this.prev = null;
}

/*
Adds a node to the end of the list
 */
LinkedList.prototype.add = function(val) {
  if (this.head) {
    if (this.head === this.tail) {
      this.tail = new Node(val);
      this.tail.prev = this.head;
      this.head.next = this.tail;
    }
    else {
      const newTail = new Node(val);
      newTail.prev = this.tail;
      this.tail.next = newTail;
      this.tail = newTail;
    }
  }
  else {
    this.head = new Node(val);
    this.tail = this.head;
  }
};

/*
Removes the first node with the inputted value
 */
LinkedList.prototype.remove = function(val) {
  let curNode = this.head;
  while (curNode) {
    if (curNode.val === val) {
      if (curNode.prev) {
        curNode.prev.next = curNode.next;
      }
      else {
        this.head = curNode.next;
        this.head.prev = null;
      }
      if (curNode.next) {
       curNode.next.prev = curNode.prev; 
      }
      else {
        this.tail = curNode.prev;
        this.tail.next = null;
      }
      return curNode;
    }
    curNode = curNode.next;
  }
};

module.exports = LinkedList;
