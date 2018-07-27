/**
 * Write a function to see if a binary tree "superbalanced".
 * An empty tree is balanced. A non-empty binary tree T is balanced if:
1) Left subtree of T is balanced
2) Right subtree of T is balanced
3) The difference between heights of left subtree and right subtree is not more than 1.
example: http://www.geeksforgeeks.org/wp-content/uploads/balanced_tree.GIF
 */

function superbalanced(tree) {
  if(!tree || tree.value === null) return 0;

  const height = (node) => {
    if(!node) return 0;
    let leftHeight = height(node.left);
    let rightHeight = height(node.right);
    return Math.max(leftHeight, rightHeight) + 1;
  }

  let leftHead = tree.left;
  let rightHead = tree.right;
  let leftSubtreeHeight = height(leftHead);
  let rightSubtreeHeight = height(rightHead);

  if (rightSubtreeHeight - leftSubtreeHeight <= 1 && leftSubtreeHeight - rightSubtreeHeight <= 1) {
    return true;
  }
  return false;
}

module.exports = {BinaryTree: BinaryTree, superbalanced: superbalanced};
