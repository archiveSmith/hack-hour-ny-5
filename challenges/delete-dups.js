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

// function deleteDups(head) {
//   let outer = head;

//   while (outer) {
//     let inner = outer;

//     while (inner.next) {
//       if (inner.next.value === outer.value) {
//         inner.next = inner.next.next;
//       } else {
//         inner = inner.next;
//       }
//     }

//     outer = outer.next;
//   }
// }

// function Node(val) {
//   this.value = val;
//   this.next = null;
// }

// const node = new Node(3);
// node.next = new Node(2);
// node.next.next = new Node(1);
// node.next.next.next = new Node(3);
// deleteDups(node)
// console.log(node);

module.exports = deleteDups;
