/**
 * @param {string} s
 * @return {boolean}
 */
 var isValid = function(s) {
    let stack = []; //initialize stack to store opening parentheses
    let par = new Map(); //initialize map then we set all key:value pairs for valid parentheses
    par.set('(', ')')
    par.set('[',']')
    par.set('{','}')
    
    for (var c of s) { //iterating over input string

        if (par.has(c)) { //All keys are opening parentheses, this only evaluates to true if c is an opening parentheses
            stack.push(c); //pushes opening parentheses onto the stack
        }
        
        else {
            if ( par.get(stack[stack.length-1])==c ) { //we take the item at the top of the stack, pass it to get() as a key, then check if the associated value matches current c.
                stack.pop();
            }
            else {
                return false; //if associated value does not match current c, then we have a closing parentheses with no matching opening preceding it. This means the string is invalid.
            }
        }
}
    
    if (stack.length==0) { //an opening parentheses is only popped off when there is a matching closing parentheses. If the stack is empty, then we had all valid pairings.
        return true;
    }
    return false; //If the stack is not empty then we had an opening parentheses with no matching closing parentheses. 
    
        
       
            


    
};