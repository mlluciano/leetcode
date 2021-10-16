/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
 var mergeTwoLists = function(l1, l2) {
    
    var dummy = new ListNode(-1); //dummy node to start off new list
    var result = dummy; //storing head to final answer, dummy node will be omitted
    
    while (l1 && l2) { //while both lists aren't empty
        
        if (l1.val > l2.val) { 
            dummy.next = new ListNode(l2.val); //creates new node with value of current l2 node and tacks it onto our list (which started with dummy node)
            dummy=dummy.next; //iterating dummy node to the tail
            l2=l2.next; //shifts head of list l2 over one, destroying the first node in the list
        }
        
        else if (l2.val > l1.val) {
            dummy.next = new ListNode(l1.val);
            dummy=dummy.next;
            l1=l1.next;
        }
        
        else {
            dummy.next = new ListNode(l2.val);
            dummy=dummy.next;
            l2=l2.next;
            
            dummy.next = new ListNode(l1.val);
            dummy=dummy.next;
            l1=l1.next;
        }
    }
    
    if(l1) {dummy.next=l1;} //if we have two lists of unequal length, we will break out of the while loop and have a list with remaining nodes
    if(l2) { dummy.next=l2;} //if l2 has remaining items, we point the next node in our solution to the head of l2, finishing off our answer
    return result.next; //we return result.next because result is storing -1, the dummy node and we want to omit from our list
    
};