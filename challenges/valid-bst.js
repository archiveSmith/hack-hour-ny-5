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

function validBST(tree) {
    function validBSTHelper(node, max, min) {
        if (max && node.value > max) {
            return false;
        }
        if (min && node.value < min) {
            return false;
        }
        let leftCheck = true;
        let rightCheck = true;
        if (node.left) {
            leftCheck = validBSTHelper(node.left, node.value, min);
        }
        if (node.right) {
            rightCheck = validBSTHelper(node.right, max, node.value);
        }
        return leftCheck && rightCheck;
    }
    return validBSTHelper(tree);
}

module.exports = {BinaryTree: BinaryTree, validBST: validBST};
