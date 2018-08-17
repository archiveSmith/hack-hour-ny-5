'use strict';
/**
 * Make an EventEmitter that
 *
 * Example:
 * var instance = new EventEmitter();
 * var counter = 0;
 * instance.on('increment', function() {
 *   counter++;
 * }); // counter should be 0
 * instance.trigger('increment'); // counter should be 1
 * instance.trigger('increment'); // counter should be 2
 *
 *
 * Caveats:
 * - If we repeatedly call .on with the same event name, it should
 *   continue to call the old function(s) as well. That is to say, we can have multiple
 *   listeners for one event.
 * - If `obj.trigger` is called with additional arguments, pass those to the
 *   listeners.
 * - It is not necessary to write a way to remove listeners.
 */

function EventEmitter() {
  this.events = {};
}

EventEmitter.prototype.on = function(funcName, func) {
  if (!this.events[funcName]) {
    this.events[funcName] = [];
  }
  this.events[funcName].push(func);
};

EventEmitter.prototype.trigger = function(funcName, ...args) {
  const funcs = this.events[funcName];

  if (!funcs) return;

  funcs.forEach(func => {
    func(...args);
  });
};

/* TEST */
// let counter = 0;
// const instance = new EventEmitter();

// instance.on('click', (...args) => {
//   const sum = args.reduce((sum, num) => sum + num);
//   counter += sum;
// });

// instance.trigger('click', 1, 2, 3);

// console.log(counter);

module.exports = EventEmitter;
