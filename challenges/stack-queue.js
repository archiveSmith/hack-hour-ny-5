/**
 * Create a stack.Then create a queue using two stacks.
 */


function Stack() {
    this.storage = [];
    this.length = 0;
}

Stack.prototype.push = function(value) {
    this.storage.push(value);
    this.length++;
}

Stack.prototype.pop = function() {
    if (this.length > 0) {
        const top = this.storage[--this.length];
        delete this.storage[this.length];
        return top;
    }
}


/**
* Queue Class
*/


function Queue() {
    this.pushStack = new Stack();
    this.popStack = new Stack();
}

Queue.prototype.push = function(value) {
    this.pushStack.push(value);
}

Queue.prototype.pop = function() {
    if (this.pushStack.length + this.popStack.length > 0) {
        if (this.popStack.length === 0) {
            while (this.pushStack.length > 0) {
                this.popStack.push(this.pushStack.pop());
            }
        }
        return this.popStack.pop();
    }
}

module.exports = {Stack: Stack, Queue: Queue};
