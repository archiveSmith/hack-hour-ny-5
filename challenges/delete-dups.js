/**
 * Write a function deleteDups that removes duplicates from an unsorted linked list.
 *
 * Example:
 * 1->2->3->3
 *
 * deleteDups(head); -> 1->2->3
 *
 * Extra:
 * How would you solve this problem if a temporary buffer is not allowed?
 */

function deleteDups(head) {
  const cache = {};

  let current = head;
  let prev = null;

  while (current) {
    const { value } = current;

    if (cache[value]) {
      prev.next = current.next;
      current.next = null;
    } else {
      cache[value] = true;
    }

    prev = current;
    current = current.next;
  }
}

module.exports = deleteDups;
