// 35. Search Insert Position

// Given a sorted array and a target value, return the index if the target is found. If not, return the index where it would be if it were inserted in order.

// You may assume no duplicates in the array.

// Example 1:

// Input: [1,3,5,6], 5
// Output: 2

// Example 2:

// Input: [1,3,5,6], 2
// Output: 1

//sample 48 ms submission

var searchInsert = function(nums, target) {
 var out =nums.indexOf(target);
    if (out == -1){
        var i = 0
        for (; target > nums[i] ; i++){};
        out = i;
    }
    return out ;
};

//sample 52 ms submission

var searchInsert = function(nums, target) {
    var index = nums.indexOf(target);
    if(index >= 0){
        return index;
    }
    for(var i = 0; i < nums.length; i++)
    {
        if(target < nums[i]){
            return i;
        }
    }
    return nums.length;
};

var searchInsert = function(nums, target) {
    var index = nums.indexOf(target);
    if(index >= 0){
        return index;
    } else {
      for(var i = 0; i < nums.length; i++) {
        if(target < nums[i]){
            return i;
        }
      }
      return nums.length;
    }
};

// 66. Plus One
// Given a non-empty array of digits representing a non-negative integer, plus one to the integer.

// The digits are stored such that the most significant digit is at the head of the list, and each element in the array contain a single digit.

// You may assume the integer does not contain any leading zero, except the number 0 itself.

// Example 1:

// Input: [1,2,3]
// Output: [1,2,4]
// Explanation: The array represents the integer 123.

// Example 2:

// Input: [4,3,2,1]
// Output: [4,3,2,2]
// Explanation: The array represents the integer 4321.

//sample 48 ms submission
const plusOne = (nums) => {
    let r = [];
    let carry = 1;
  
    for (let i = nums.length - 1; i >= 0; i--) {
      if (nums[i] + carry >= 10) {
        carry = 1;
        r.unshift((nums[i] + carry) % 10);
      } else {
        r.unshift(nums[i] + carry);
        carry = 0;
      }
    }
  
    if (carry) {
      r.unshift(carry);
    }
  
    return r;
  };

//sample 52 ms submission
var plusOne = function(digits) {
    for(var i = digits.length - 1; i >= 0; i--) {
        if(digits[i] < 9) {
            digits[i]++;
            return digits;
        } else {
            digits[i] = 0;
        }
    }
    
    digits.unshift(1);
    return digits;
};

// 119. Pascal's Triangle II
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