/**
 * Create a stack.Then create a queue using two stacks.
 */

function Stack() {
  this.body = [];
}

Stack.prototype.add = function(value) {
  this.body.push(value);
};

Stack.prototype.remove = function() {
  let removed = this.body.pop();
  return removed;
};

/**
 * Queue Class
 */
// Push everything into stack1 then pop each element to stack2. stack2 is now in reversed order. Pop out to be evaluated
function Queue() {
  this.queue = 
}

module.exports = { Stack: Stack, Queue: Queue };
