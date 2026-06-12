
/*
==================================================
3. Remove Duplicate Characters from a String
Difficulty: Easy
==================================================

Problem:
Given a string s, remove all duplicate characters
while preserving the order of their first occurrence.

Return the resulting string.

Examples:

Input: s = "programming"
Output: "progamin"

Explanation:
'p', 'r', 'o', 'g', 'a', 'm', 'i', 'n'
are the first occurrences of each character.

Example 2:

Input: s = "aabbcc"
Output: "abc"

Example 3:

Input: s = "leetcode"
Output: "letcod"

Example 4:

Input: s = "aaaa"
Output: "a"



Expected Output:
Return a string containing only the first occurrence
of each character while maintaining the original order.

==================================================
*/

/*

ham har element kai ley ek baar loop chalayege  and use mai hasset mai enter karayege and tabhi sath sath resultant string mai emter karte jayege

*/

const str = "aaababsfsdf";

const set = new Set();

let res="";

for(let st of str){

    if(!set.has(st)){

         set.add(st);

         res = res+st;
         
    }
}

console.log(res);