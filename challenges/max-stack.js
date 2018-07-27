/*
 * Create a stack with the push, pop, and getMax methods.
 * push should return the new length of the stack.
 * pop should return the element that was just removed.
 * getMax should return the largest value currently in the stack.
 * BONUS: The getMax method should retrieve the maximum value from the stack in O(1) time.
 */

// First in last out

function Stack() {
  this.maxNum = 0;
  this.prevMax = 0;
  this.body = [];
  // body...
}

Stack.prototype.push = function(element) {
  // element 0 = 5; element 1 = 6; element 2 = 10;
  if (this.maxNum === 0) {
    this.maxNum = element; // 5 - > 6
    this.prevMax = element; // 5
  }
  if (this.prevMax !== this.maxNum && this.maxNum < element) {
    this.prevMax = this.maxNum; // 5 -> 6
    this.maxNum = element; // 6 -> 10
  }
  if (this.maxNum < element) {
    this.maxNum = element; // 5 -> 6
  }
  this.body[this.body.length] = element;
};
Stack.prototype.pop = function() {
  const popped = this.body.slice(this.body.length - 1, this.body.length);
  this.body = this.body.slice(0, this.body.length - 1);
  if (this.maxNum === popped[0]) {
    this.maxNum = this.prevMax;
    this.prevMax = 0;
    for (let i = 0; i < this.body.length; i++) {
      if (this.body[i] !== this.maxNum && this.body[i] > this.prevMax) {
        this.prevMax = this.body[i];
      }
    }
  }
  return popped;
};
Stack.prototype.getMax = function() {
  if (this.body.length !== 0) {
    return this.maxNum;
  }
  return undefined;
};

module.exports = Stack;
