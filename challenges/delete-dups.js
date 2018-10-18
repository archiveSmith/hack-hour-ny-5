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

// Hashing/Object
// function deleteDups(head) {
//   var data = {};
//   var prev;
//   for (var curr = head; curr; curr = curr.next) {
//     if (curr.value in data) {
//       prev.next = curr.next;
//     } else {
//       data[curr.value] = true;
//       prev = curr;
//     }
//   }
// }


// Nested loops
function deleteDups(head) {
  let outer = head;

  while (outer) {
    let inner = outer;

    while (inner.next) {
      if (inner.next.value === outer.value) {
        inner.next = inner.next.next;
      } else {
        inner = inner.next;
      }
    }

    outer = outer.next;
  }
}

module.exports = deleteDups;
