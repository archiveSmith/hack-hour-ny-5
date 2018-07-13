/* Merge two linked lists so that their nodes alternate. Let the first node of the zipped list be
 * the first node of the first argument, if it exists.
 * Implement the linked list using only a Node class. No need for a wrapper LinkedList class
 *
 * BONUS: Do this in place
 */

function Node(val) {
  this.value = val;
  this.next = null;
}

function zip(l1, l2) {
  let cur_node_l1 = l1;
  let cur_node_l2 = l2;
  let onL1 = false;
  let mergedList = l1;
  let mergedListCurNode = l1;
  while (cur_node_l1 && cur_node_l2) {
    if (onL1) {
      cur_node_l2 = cur_node_l2.next;
      mergedListCurNode.next = cur_node_l1;
    }
    else {
      cur_node_l1 = cur_node_l1.next;
      mergedListCurNode.next = cur_node_l2;
    }
    mergedListCurNode = mergedListCurNode.next;
    onL1 = ! onL1;
  }
  return mergedList;
};

// function printll(l1) {
//   let str = '';
//   let cur_node = l1;
//   while (cur_node) {
//     str = str + cur_node.value + ' -> ';
//     cur_node = cur_node.next;
//   }
//   console.log(str);
// }

// let l1 = new Node(14);
// let c1 = l1;
// let l2 = new Node(17);
// let c2 = l2;

// for (let i = 0; i < 5; i++) {
//   c1.next = new Node(i);
//   c1 = c1.next;
//   if (i < 1) {
//     c2.next = new Node(i*2);
//     c2 = c2.next;
//   } 
// }

printll(l1);
printll(l2);
printll(zip(l1, l2));

module.exports = {Node: Node, zip: zip};
