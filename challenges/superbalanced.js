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
  if (!tree.left && !tree.right) return true;
  if (!Math.abs(bstHeight(tree.left) - bstHeight(tree.right)) <= 1) return false;
  if (tree.left) return superbalanced(tree.left);
  if (tree.right) return superbalanced(tree.right);
}

function bstHeight(tree) {
  if (!tree) return 0;

  let height = 0;
  let maxHeight = 0;

  function _bstHeight(tree) {
    if (maxHeight < height) maxHeight = height;
    if (tree.left) {
      height++;
      _bstHeight(tree.left);
    }
    if (tree.right) {
      height++;
      _bstHeight(tree.right);
    }
    height--;
  }

  _bstHeight(tree);

  return maxHeight;
}

const bt1 = new BinaryTree(50);
bt1.left = new BinaryTree(10);
bt1.left.right = new BinaryTree(20);
bt1.left.left = new BinaryTree(3);
bt1.left.left.left = new BinaryTree(2);
bt1.left.left.left.left = new BinaryTree(1);
bt1.right = new BinaryTree(70);
bt1.right.right = new BinaryTree(100);
bt1.right.right.right = new BinaryTree(1000);
bt1.right.right.right.right = new BinaryTree(10000);

console.log(superbalanced(bt1));

module.exports = { BinaryTree: BinaryTree, superbalanced: superbalanced };
