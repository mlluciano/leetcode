/**
 * @param {number} n
 * @return {number}
 */
 var climbStairs = function(n) { //solving this one using dynamic programming
    
    let dp = [0,1,2]; //base cases. index 0 does not matter, we know solution to n=1 is 1 and n=2 is 2. 
    for (let i=3; i<=n; i++) { //iterating up to n
        dp[i] = dp[i-1] + dp[i-2]; //we can find distinct ways to n as the sum of distinct ways to n-1 and n-2. We climb from there all the way to n
    }
    return dp[n]; //final answer, number of distinct ways to climb to n
    
    
};