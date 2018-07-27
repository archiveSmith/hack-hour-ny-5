/**
 * Write a function to see if a binary tree "superbalanced".
 * An empty tree is balanced. A non-empty binary tree T is balanced if:
1) Left subtree of T is balanced
2) Right subtree of T is balanced
3) The difference between heights of left subtree and right subtree is not more than 1.
example: http://www.geeksforgeeks.org/wp-content/uploads/balanced_tree.GIF
 */

function BinaryTree(value) {
  this.value = value;
  this.left = null;
  this.right = null;
}

function superbalanced(tree) {
  function sbHelper(node, height, max, min) {
    if (max && node.value > max) {
      return -1;
    }
    if (min && node.value < min) {
      return -1;
    }
    let leftCheck = height;
    let rightCheck = height;
    if (node.left) {
      leftCheck = sbHelper(node.left, height+1, node.value, min);
    }
    if (leftCheck === -1) {
      return -1;
    }
    if (node.right) {
      rightCheck = sbHelper(node.right, height+1, max, node.value);
    }
    if (rightCheck === -1) {
      return -1;
    }
    if (Math.abs(leftCheck - rightCheck) > 1) {
      return -1;
    }
    return Math.max(leftCheck, rightCheck);
  }
  return sbHelper(tree, 0) !== -1;
}

module.exports = {BinaryTree: BinaryTree, superbalanced: superbalanced};
