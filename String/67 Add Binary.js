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
var addBinary = function(s1, s2) {
    let i = s1.length - 1;
    let j = s2.length - 1;
    let c = 0;
    let s = '';

    while (i >= 0 || j >= 0 || c > 0) {
        const a = (i < 0) ? 0 : s1[i--] - '0';
        const b = (j < 0) ? 0 : s2[j--] - '0';

        s = (a ^ b ^ c) + s;
        c = (a + b + c) >>> 1;
    }

    return s;
};


