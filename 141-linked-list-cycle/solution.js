/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {boolean}
 */
 var hasCycle = function(head) {
    let map = new Map(); //map will track visited nodes
    while (head!=null) {
        if (map.has(head)) { //if the map contains the node already, it means we have visited it before. ie a cycle exists so we return true
            return true;
        }
        else {
            map.set(head, 1) //node has not been visited before, we add it to the map
        }
        head=head.next;
    }
    return false;
    
};