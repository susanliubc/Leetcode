/*Given two binary strings, return their sum (also a binary string).

The input strings are both non-empty and contains only characters 1 or 0.

Example 1:

Input: a = "11", b = "1"
Output: "100"

Example 2:

Input: a = "1010", b = "1011"
Output: "10101"

sample 60 ms submission

/**
 * @param {string} a
 * @param {string} b
 * @return {string}
 */
var addBinary = function(a, b) {
    let i = a.length - 1;
    let j = b.length - 1;
    let carry = 0;
    let res = '';

    while (i >= 0 || j >= 0 || carry > 0) {
        carry += (i >= 0) ? a[i--] - '0': 0;
        carry += (j >= 0) ? b[j--] - '0': 0;

        res = carry%2 + res;
        carry >> 1;
    }

    return res;
};


