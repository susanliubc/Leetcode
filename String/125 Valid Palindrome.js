/*Given a string, determine if it is a palindrome, considering only alphanumeric characters and ignoring cases.

Note: For the purpose of this problem, we define empty string as valid palindrome.

Example 1:

Input: "A man, a plan, a canal: Panama"
Output: true

Example 2:

Input: "race a car"
Output: false
sample 60 ms submission

/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function(s) {
    /* 原生办法
    if (s.trim() == "")
        return true;
    var arr = s.toLowerCase().split("").filter(function(item){
        return /[\d\w]/.test(item);
    });
    var str = arr.join("");
    return str == arr.reverse().join("");*/
    var str = s.replace(/( |[^a-zA-Z0-9])/g, "").toLowerCase();
    var i = 0;
    var j = str.length - 1;
    while (j > i){
        if (str[i] === str[j]){
            i++;
            j--;
        } else {
            return false;
        }
    }
    return true;
};
