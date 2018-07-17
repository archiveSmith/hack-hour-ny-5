/**
 * Write a function for reversing a linked list.
 * Your function will have one input: the head of the list
 * Your function should return the new head of the list
 *
 * BONUS:
 * Do it in place
 *
 */

function Node(value) {
    this.value = value;
    this.next = null;
}

function reverseLinkedList(head) {
    let curNode = head;
    let prevNode = null;
    while (curNode) {
        let nextNode = curNode.next;
        curNode.next = prevNode;
        prevNode = curNode;
        curNode = nextNode;
    }
    return prevNode;
}

module.exports = {Node: Node, reverseLinkedList: reverseLinkedList};
