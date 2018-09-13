/* Given a string s consists of upper/lower-case alphabets and empty space characters ' ', return the length of last word in the string.

If the last word does not exist, return 0.

Note: A word is defined as a character sequence consists of non-space characters only.

Example:

Input: "Hello World"
Output: 5

sample 48 ms submission

/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function(s) {
    let end = s.length - 1;
    let length = 0;
    while (s[end] === ' ') end--;
    while (end >= 0 && s[end] !== ' ') { length++; end--; }
    return length;
};
  
//sample 52 ms submission

/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function(s) {
  return s === "" ? 0 : s.trim().split(' ').slice(-1)[0].length
};


  
