const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement the Stack with a given interface via array.
 *
 * @example
 * const stack = new Stack();
 *
 * stack.push(1); // adds the element to the stack
 * stack.peek(); // returns the peek, but doesn't delete it, returns 1
 * stack.pop(); // returns the top element from stack and deletes it, returns 1
 * stack.pop(); // undefined
 *
 */
class Stack {
  constructor() {
    this.stackArr = [];
  }
  push(element) {
    this.stackArr.push(element);
  }

  pop() {
    if (this.stackArr.length) {
      return this.stackArr.pop();
    }
    return false;
  }

  peek() {
    return this.stackArr.length
      ? this.stackArr[this.stackArr.length - 1]
      : false;
  }
}

module.exports = {
  Stack,
};
