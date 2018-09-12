/*Given an integer array nums, find the sum of the elements between indices i and j (i ≤ j), inclusive.

Example:

Given nums = [-2, 0, 3, -5, 2, -1]

sumRange(0, 2) -> 1
sumRange(2, 5) -> -1
sumRange(0, 5) -> -3

Note:

    You may assume that the array does not change.
    There are many calls to sumRange function. 
64 ms submisson */


/**
 * @param {number[]} nums
 */
var NumArray = function(nums) {
    let presum = new Array(nums.length+1)
    presum[0] = 0
    for (let i=1; i<=nums.length; i++) {
        presum[i] = presum[i-1] + nums[i-1]
    }
    this.presum = presum
};

/** 
 * @param {number} i 
 * @param {number} j
 * @return {number}
 */
NumArray.prototype.sumRange = function(i, j) {
    if (i > j) {
        return 0
    } else {
        return this.presum[j+1] - this.presum[i]
    }
};

/** 
 * Your NumArray object will be instantiated and called as such:
 * var obj = Object.create(NumArray).createNew(nums)
 * var param_1 = obj.sumRange(i,j)
 */



