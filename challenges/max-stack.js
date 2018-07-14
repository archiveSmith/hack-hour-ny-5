/*
 * Create a stack with the push, pop, and getMax methods.
 * push should return the new length of the stack.
 * pop should return the element that was just removed.
 * getMax should return the largest value currently in the stack.
 * BONUS: The getMax method should retrieve the maximum value from the stack in O(1) time.
 */

function Stack() {
  this.arr = [];
}

Stack.prototype.push = function (value) {
  if (! this.arr) {
    this.arr.push(value);
  }
  let ind = this.arr.length;
  while (ind >= 1 && this.arr[ind - 1] > value) {
    this.arr[ind] = this.arr[ind -1];
    ind--;
  }
  this.arr[ind] = value;
  return this.arr.length;
}

Stack.prototype.getMax = function() {
  return this.arr[this.arr.length - 1];
}

Stack.prototype.pop = function() {
  return this.arr.pop();
}

module.exports = Stack;