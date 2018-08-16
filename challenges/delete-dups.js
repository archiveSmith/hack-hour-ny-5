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

// function Node(value) {
//     this.value = value;
//     this.next = null;
// }


function deleteDups(head) {
    // O(1) space solution. O(n^2) time. Can also have a O(n) time, O(n) space
    // solution using a hash table
    let curNode = head;
    while (curNode && curNode.next) {
        let checkNode = curNode.next;
        let prevCheckNode = curNode;
        while (checkNode) {
            if (checkNode.value === curNode.value) {
                prevCheckNode.next = checkNode.next;
                checkNode = prevCheckNode.next;
            }
            else {
                prevCheckNode = checkNode;
                checkNode = checkNode.next;
            }
        }
        curNode = curNode.next;
    }
    return head;
}

// let ll = new Node(1);
// ll.next = new Node(2);
// ll.next.next = new Node(3);
// ll.next.next.next = new Node(3);
// console.log(ll);
// console.log(deleteDups(ll));

module.exports = deleteDups;
