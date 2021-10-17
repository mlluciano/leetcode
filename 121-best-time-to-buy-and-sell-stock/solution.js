/**
 * @param {number[]} prices
 * @return {number}
 */
 var maxProfit = function(prices) {
    let maxProfit=0; //variable to track max profit, our answer
    let minPrice = prices[0]; //minimum price we can buy for is set to the first element
    for (let i=0; i<prices.length; i++) { //looping through array in one pass
        if (prices[i]<minPrice) { //if we find a price lower than our current minimum we update our minimum
            minPrice = prices[i];
        }
        if (prices[i]-minPrice > maxProfit) { //if we find a price at index i that subtracting minprice from it yields a greater profit than our current max, we update our max
            maxProfit = prices[i]-minPrice;
        }
    }
    return maxProfit; //we return the maxprofit found
};