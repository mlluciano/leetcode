/**
 * @param {number[]} nums
 * @return {number}
 */
 var singleNumber = function(nums) {
    let map = new Map();
    
    for (let i=0; i<nums.length; i++) { //first loop iterates through array and stores frequency that integers appear in the array
        if (!map.has(nums[i])) { //if number has not been added to the map yet
            map.set(nums[i], 1);
        }
        else {
            map.set(nums[i], 2); //if number does exist in the map, then current index is the second occurrence of said number. We set the value, which represents frequency, to 2
        }
    }
    
    for (let i=0; i<nums.length; i++) { //second for loop is iterating through the array and finding the one remaining key that has a value of 1
        if (map.get(nums[i])==1) {
            return nums[i]; //returning the number with frequency 1
        }
    }
    
    
    
};