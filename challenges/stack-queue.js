/**
 * Create a stack.Then create a queue using two stacks.
 */

function Stack() {
  this.body = [];
  this.length = 0;
}

Stack.prototype.push = function(item) {
  this.body[this.length] = item;
  this.length += 1;
};

Stack.prototype.pop = function() {
  this.length -= 1;
  const returnItem = this.body[this.length];
  this.body[this.length] = undefined;
  return returnItem;
};

/**
 * Queue Class
 */

function Queue() {
  this.primary = new Stack();
  this.reverse = new Stack();
}

Queue.prototype.enqueue = function(item) {
  if (this.secondary.length > 0) {
    this.secondary.push(item);
  } else {
    this.primary.push(item);
  }
};

Queue.prototype.dequeue = function() {
  if (this.secondary.length > 0) {
    return this.secondary.pop();
  } else {
    while (this.primary.length > 0) {
      this.secondary.push(this.primary.pop());
    }
    return this.secondary.pop();
  }
};

module.exports = { Stack: Stack, Queue: Queue };
