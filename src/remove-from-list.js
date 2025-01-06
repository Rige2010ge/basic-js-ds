const { NotImplementedError } = require('../extensions/index.js');

const { ListNode } = require('../extensions/list-node.js');

/**
 * Given a singly linked list of integers l and an integer k,
 * remove all elements from list l that have a value equal to k.
 *
 * @param {List} l
 * @param {Number} k
 * @return {List}
 *
 * @example
 * For l = [3, 1, 2, 3, 4, 5] and k = 3,
 * the output should be [1, 2, 4, 5]
 *
 * Singly - linked lists are already defined using interface
 * class ListNode {
 *   constructor(x) {
 *     this.value = x;
 *     this.next = null;
 *   }
 * }
 */
function removeKFromList(l, k) {
  let tmpPrev = l;
  let tmpCurrent = l;
  let head = l;

  while (tmpCurrent !== null) {
    if (tmpCurrent.value === k) {
      if (tmpPrev === tmpCurrent) {
        head = tmpCurrent.next;
        tmpCurrent = tmpCurrent.next;
      } else {
        tmpPrev.next = tmpCurrent.next;
        tmpCurrent = tmpCurrent.next;
      }
    } else {
      if (tmpPrev === tmpCurrent) {
        tmpCurrent = tmpCurrent.next;
      } else {
        tmpPrev = tmpCurrent;
        tmpCurrent = tmpCurrent.next;
      }
    }
  }

  return head;
}

module.exports = {
  removeKFromList,
};
