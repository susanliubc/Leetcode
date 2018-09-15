/*Given a string containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.

An input string is valid if:

    Open brackets must be closed by the same type of brackets.
    Open brackets must be closed in the correct order.

Note that an empty string is also considered valid.

Example 1:

Input: "()"
Output: true

Example 2:

Input: "()[]{}"
Output: true

Example 3:

Input: "(]"
Output: false

Example 4:

Input: "([)]"
Output: false

Example 5:

Input: "{[]}"
Output: true
sample 48 ms submission

/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    let map = {};
    let hash = {};
    let stack = [];
    
    map['}']='{';
    map[']']='[';
    map[')']='(';
    
    hash['{']=0;
    hash['[']=0;
    hash['(']=0;

    for(let i=0;i<s.length;i++){
        
        if (s[i] in hash){
            stack.push(s[i]);
        }else {
            let key = s[i];
            //console.log(s[i] in map);
            if (key in map && stack.pop() == map[key]){
                // good
            }else{
                return false;
            }
        }
    }
    
    if (stack.length>0) {
        return false;
    }else{
        return true;
    }
};

//sample 52 ms submission

/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    let stack = [];
    
    for(let v of s){
        if(v==='(') stack.push(')')
        else if(v==='[') stack.push(']')
        else if(v==='{') stack.push('}')
        else if(stack.length===0 || stack.pop() !== v) return false
    }
    
    return (stack.length === 0) ? true : false;
};
