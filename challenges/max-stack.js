/*
 * Create a stack with the push, pop, and getMax methods.
 * push should return the new length of the stack.
 * pop should return the element that was just removed.
 * getMax should return the largest value currently in the stack.
 * BONUS: The getMax method should retrieve the maximum value from the stack in O(1) time.
 */

function Stack() {
  this.items = [];
  this.max;
  this.length = 0;
}

Stack.prototype.push = function(item) {
  const index = this.length;
  this.items[index] = item;
  this.length += 1;
  if (this.max < item || this.max === undefined) this.max = item;
  return this.length;
};

Stack.prototype.pop = function() {
  const item = this.items[this.length - 1];
  this.length -= 1;

  if (this.length === 0) this.max = undefined;
  else if (this.max === item) {
    for (let i = 0; i < this.length; i++) {
      if (this.max < this.items[i]) this.max = this.items[i];
    }
  }

  return item;
};

Stack.prototype.getMax = function() {
  return this.max;
};

module.exports = Stack;
