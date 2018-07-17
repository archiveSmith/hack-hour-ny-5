/*
 * Create a stack with the push, pop, and getMax methods.
 * push should return the new length of the stack.
 * pop should return the element that was just removed.
 * getMax should return the largest value currently in the stack.
 * BONUS: The getMax method should retrieve the maximum value from the stack in O(1) time.
 */

<<<<<<< HEAD
 function Stack() {

  this.length = 0;
  this.max = -Infinity;

  this.push = (element) => {
    this[this.length] = element;
    if (this.max < element) this.max = element;
    return ++this.length;
  }

  this.pop = () => {
    const popped = this[this.length-1];
    --this.length;
    return popped;
  }

  this.getMax = () => {
    return this.max;
  }
}

module.exports = Stack;
=======
function Stack() {
  // body...
}

module.exports = Stack;
>>>>>>> b0fee0eda63e5a9223474eb8ac6b8e6a61592824
