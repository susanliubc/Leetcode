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