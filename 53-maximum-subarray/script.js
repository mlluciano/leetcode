/**
 * @param {number[]} nums
 * @return {number}
 */
 var maxSubArray = function(nums) { 
    let curr = nums[0]; //current subarray
    let max = nums[0]; //maximum subarray
    
    for (let i=1; i<nums.length; i++) { //iterating through array, we start at one because index 0 is stored in curr
        curr = curr + nums[i]; //adding value of next index onto our current suburray
        if (curr<nums[i]) { //if current subarray is less than current index value, it is not worth keeping because we could just start subarray over at the greater index value
            curr=nums[i]; //starting current subarray over
            console.log(curr); //for debugging
        }
        if (curr>max) {max=curr;} //updates max whenever we find a new one
    }
    return max; //final answer 
};