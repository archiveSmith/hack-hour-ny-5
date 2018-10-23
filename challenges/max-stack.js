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

Stack.prototype.push = function (item) {
  this.items[this.length++] = item;
  if (this.max < item || this.max === undefined) this.max = item;
  return this.length;
};

Stack.prototype.pop = function () {
  const items = this.items.splice(--this.length, 1);
  if (this.length === 0) this.max = undefined;
  else if (this.max === items[0]) {
    this.max = this.items[0];

    for (let i = 1; i < this.length; i++) {
      if (this.max < this.items[i]) this.max = this.items[i];
    }
  }

  return items[0];
};

Stack.prototype.getMax = function () {
  return this.max;
};

const stack = new Stack();
console.log(stack);
stack.push(1);
console.log(stack);
stack.push(2);
console.log(stack);
stack.push(3);
console.log(stack);
stack.push(4);
console.log(stack);
stack.push(0);
console.log(stack);
stack.pop();
console.log(stack);
stack.pop();
console.log(stack);

module.exports = Stack;
