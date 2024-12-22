const { ListNode } = require("../extensions/list-node.js");

/**
 * Given a singly linked list of integers l and an integer k,
 * remove all elements from list l that have a value equal to k.
 *
 * @param {ListNode | null} l
 * @param {Number} k
 * @return {ListNode | null}
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
  if (l == null) {
    return l;
  }

  let head = null;
  let tail = null;
  for (let n = l; n != null; n = n?.next) {
    if (n.value === k) {
      continue;
    }

    head = n;
    tail = n;
    break;
  }

  for (let n = tail.next; n != null; n = n.next) {
    if (n.value === k) {
      tail.next = n.next;
      continue;
    }

    tail = n;
  }

  return head;
}

module.exports = {
  removeKFromList,
};
