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

// I know I need to make this recursive somehow...
function validBST(tree) {
    let leftIsTree = false;
    let rightIsTree = false;
    while (this.left !== null && this.value > this.left.value) { 
        leftIsTree = true;
    }
    while (this.right !== null && this.value < this.right.value) {
        rightIsTree = true;
    }
    return leftIsTree + rightIsTree;
}

module.exports = {BinaryTree: BinaryTree, validBST: validBST};
