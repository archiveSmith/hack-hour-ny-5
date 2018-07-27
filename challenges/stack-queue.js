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
};

// function Stack() {
//   this.storage = {};
//   this.index = 0;
// }

// Stack.prototype.push = function(value) {
//  this.storage[this.index] = value;
//  this.index += 1;
// };

// Stack.prototype.pop = function() {
//   var popped = this.storage[this.index - 1];
//   delete this.storage[this.index - 1];

//   if (this.index > 0) {
//     this.index -= 1;
//   }

//   return popped;
// }

// Stack.prototype.getMax = function() {
//   let maxValue = this.stack[0];

//   for (var index in this.storage) {
//     if (this.storage[index] >= maxValue || maxValue === undefined) {
//       maxValue = this.storage[index];
//     }
//   }

//   return maxValue;
// }

// //O(n) time for getMax
// function Stack() {
//   this.stack = [];
// }

// Stack.prototype.push = function(value) {
//   return this.stack.push(value);
// }

// Stack.prototype.pop = function() {
//   return this.stack.pop();
// }

// Stack.prototype.getMax = function() {
//   let max = this.stack[0];
//   for (let i = 0; i < this.stack.length; i++) {
//     if (this.stack[i] >= max) max = this.stack[i];
//   }

//   return max;
// }

// //O(n) space/ O(1) time for getMax
// function Stack() {
//   this.stack = [];
//   this.maxStack = [];
// }

// Stack.prototype.push = function(value) {
//   //push to og stack
//   this.stack.push(value);

//   //if maxStack is empty, or if the value is greater than the max so far, push the value 
//   //otherwise, our last max is still our max at the last index
//   let max = (!this.maxStack.length || value > this.maxStack[this.maxStack.length - 1]) ? value : this.maxStack[this.maxStack.length - 1];
//   return this.maxStack.push(max);
// }

// Stack.prototype.pop = function() {
//   //pop from both stacks, but return the og stack popped
//   this.maxStack.pop();
//   return this.stack.pop();
// }

// Stack.prototype.getMax = function() {
//   //return the last value from maxStack
//   return this.maxStack[this.maxStack.length - 1];
// }

module.exports = { Stack: Stack, Queue: Queue };
