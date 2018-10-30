/**
 * Create a stack.Then create a queue using two stacks.
 */


function Stack() {
  this.stack = {};
  this.index = 0;

  this.push = (value) => {
    this.stack[this.index] = value;
    return ++this.index;
  }
  this.pop = () => {
    let lastValue = this.stack[this.index -1];
    delete this.stack[this.index -1];
    this.index--;
    return lastValue;
  }
}

function Queue() {
  let stack1 = new Stack();
  let stack2 = new Stack();

  this.enqueue = (value) => {
    stack1.push(value);
    return stack1;
  }

  this.dequeue = () => {
    if(stack2.index === 0) {
      while(stack1.index !== 0) {
        stack2.push(stack1.pop());
      } 
    }
    return stack2.pop();
  }
}

module.exports = {Stack: Stack, Queue: Queue};
