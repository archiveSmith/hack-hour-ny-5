/* You are given a tree. Write a function to check if it is a valid binary search tree. A tree is
 * a valid binary search tree if it satisfies the following constraints:
 *      at any given node, the value of all the nodes in its left tree must be < its value
 *      at any given node, the value of all the nodes in its right tree must be > its value
 * Assume that each value in the tree is unique.
 */

function BinaryTree(val) {
  this.value = val;
  this.left = null;
  this.right = null;
}

// RETURNS: TRUE OR FALSE
function validBST(tree) {
  const nums = [];

  // RETURNS; BINARYTREE
  function _validBST(tree) {
    if (tree.left) _validBST(tree.left);
    nums.push(tree.value);
    if (tree.right) _validBST(tree.right);
  }

  _validBST(tree);

  for (let i = 0; i < nums.length - 1; i++) {
    if (nums[i] > nums[i + 1]) return false;
  }

  return true;
}

const bt1 = new BinaryTree(50);
bt1.left = new BinaryTree(10);
bt1.left.left = new BinaryTree(2);
bt1.left.right = new BinaryTree(30);
bt1.right = new BinaryTree(70);
bt1.right.left = new BinaryTree(69);
bt1.right.right = new BinaryTree(0);

console.log(validBST(bt1));

module.exports = { BinaryTree: BinaryTree, validBST: validBST };
