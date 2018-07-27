/*
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
  let currentNode;
  let leftLevel = 0;
  let rightLevel = 0;
  while (this.left) {
    if (this.left.left || this.left.right) {
      leftLevel += 1;
      this.left = this.left.left;
    }
  }
  while (this.right) {
    if (this.right.left || this.right.right) {
      rightLevel += 1;
      this.right = this.right.right;
    }
  }
}

module.exports = { BinaryTree: BinaryTree, superbalanced: superbalanced };
