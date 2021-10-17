/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 */

/* 
    Inorder traversal is LEFT-CURRENT-RIGHT
    We will traverse as far to the left of the tree as we can.
    If we are currently at the leftmost node, we will push the value of that current node. 
    We will then check for children to the right, if one exists we will move to it then start the process over (check for left,etc)
    

    Note that preorder is CURRENT-LEFT-RIGHT and postorder is LEFT-RIGHT-CURRENT
*/

 var inorderTraversal = function(root) {
    let ans = []; //array to store inorder traversal
    ans = helper(root,ans); //helper function where inorder trav is performed
    return ans;
    
    
    
    
};

var helper = function(root, arr) {
    if (root!=null) { //if root is null our "tree" is just a single node....
        if (root.left!=null) { //if a left child exists
            helper(root.left,arr) //we will recursively traverse to the leftmost child
        }
        arr.push(root.val); //there is no left child, we push the root value onto our array
        if (root.right!=null) {//if a right child exists, no left child exists and current root val has already been pushed onto array.
            helper(root.right, arr); //recursively move to the right child, then check for it's left....etc 
        }
        return arr;
    }
    return [];
}