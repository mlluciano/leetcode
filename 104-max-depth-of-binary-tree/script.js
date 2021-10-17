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
 * @return {number}
 */
 var maxDepth = function(root) {
    if (!root) { //if root is null then height is 0, empty tree
        return 0;
    }
    let max = 1; //inital height
    var helper = function(node, level) { //DFS recursive function
    if (node==null) {return;} //exit condition for once we reach the end of a branch
    if (level>max) {max=level;} //update max depth when a new one is found
    helper(node.left, level+1); //recursive call on left node, incrementing our level
    helper(node.right, level+1);
}
    helper(root,1);
    return max; //at this point max will hold the maximum depth updated by our helper function traversing down each branch and recording the highest level
    
};

