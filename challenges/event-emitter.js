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

var instance = new EventEmitter();
  var counter = 0;
  instance.on('increment', function() {
  counter++;
}); // counter should be 0
instance.trigger('increment'); // counter should be 1
instance.trigger('increment'); // counter should be 2

function EventEmitter() {
    this.listenerArray = [];
}

EventEmitter.prototype.on = function(funcName, func) {
    // pushes the function to the end of the listener array
    this.listenerArray.push(func);
    // returns a reference to the event emitter
    return EventEmitter;
};

// "triggers" the func 
EventEmitter.prototype.trigger = function(funcName, ...args) {
    for (let i = 0; i < this.listenerArray.length; i++) {
        this.listenerArray[i](...args);
    }
};

module.exports = EventEmitter;
