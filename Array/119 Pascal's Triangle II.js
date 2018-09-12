// Given a non-negative index k where k ≤ 33, return the kth index row of the Pascal's triangle.

// Note that the row index starts from 0.
// In Pascal's triangle, each number is the sum of the two numbers directly above it.

// Example:

// Input: 3
// Output: [1,3,3,1]

// Follow up:

// Could you optimize your algorithm to use only O(k) extra space?

//sample 48 ms submission 
var getRow = function(rowIndex) {
    var result = [];
    result[0] = 1;
    for(var i = 1 ; i < rowIndex+1 ; i++){            
        if(i > 1){
            for(var j = i-1 ; j > 0 ; j--)
                result[j] = result[j]+result[j-1];
        }
        result.push(1);
    }
    return result;
};