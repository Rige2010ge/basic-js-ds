const { NotImplementedError } = require('../extensions/index.js');

const { ListNode } = require('../extensions/list-node.js');

/**
 * Implement the Queue with a given interface via linked list (use ListNode extension above).
 *
 * @example
 * const queue = new Queue();
 *
 * queue.enqueue(1); // adds the element to the queue
 * queue.enqueue(3); // adds the element to the queue
 * queue.dequeue(); // returns the top element from queue and deletes it, returns 1
 * queue.getUnderlyingList() // returns { value: 3, next: null }
 */
class Queue {
  constructor() {
    this.queueList = {
      head: null,
      tail: null,
    };
  }

  getUnderlyingList() {
    return this.queueList.head;
  }

  enqueue(value) {
    let node = new ListNode(value);
    if (this.queueList.head === null) {
      this.queueList.head = node;
      this.queueList.tail = node;
    } else {
      this.queueList.tail.next = node;
      this.queueList.tail = node;
    }
  }

  dequeue() {
    const node = this.queueList.head;
    const newCurrentNode = this.queueList.head.next;
    this.queueList.head = newCurrentNode;
    return node.value;
  }
}

module.exports = {
  Queue,
};
