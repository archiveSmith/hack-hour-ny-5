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
  if (this.tail) {
    const newNode = new Node(val);
    this.tail.next = newNode;
    newNode.prev = this.tail;
    this.tail = newNode;
  } else {
    this.head = new Node(val);
    this.tail = this.head;
  }
};

/*
Removes the first node with the inputted value
 */
LinkedList.prototype.remove = function(val) {
  if (this.head && this.head.val === val) {
    this.head = this.head.next;
    this.head.prev.next = null;
    this.head.prev = null;
  } else if (this.tail && this.tail.val === val) {
    this.tail = this.tail.prev;
    this.tail.next.prev = null;
    this.tail.next = null;
  } else {
    let current = this.head;

    while (current) {
      if (current.val === val) {
        current.prev.next = current.next;
        current.next.prev = current.prev;
        current.next = null;
        current.prev = null;
      }
      current = current.next;
    }
  }
};

LinkedList.prototype.print = function() {
  let current = this.head;
  const nums = [];

  while (current) {
    nums.push(current.val);
    current = current.next;
  }

  console.log(...nums);
};

// const newLL = new LinkedList();
// newLL.add(4);
// newLL.add(5);
// newLL.add(6);
// newLL.add(7);
// newLL.add(1);
// newLL.add(2);
// newLL.add(3);
// newLL.add(8);
// newLL.remove(8);
// newLL.print();

module.exports = LinkedList;
