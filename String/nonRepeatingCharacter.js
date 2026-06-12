
//Find first non-repeating character

/*
==================================================
1. First Non-Repeating Character
Difficulty: Easy
==================================================

Problem:
Given a string s, return the index of the first
non-repeating character in it.

If every character repeats, return -1.

Examples:

Input: s = "leetcode"
Output: 0

Input: s = "loveleetcode"
Output: 2

Input: s = "aabb"
Output: -1


Can you solve it in O(n) time?
==================================================
*/


const str ="leetcode";

let flag =0;

const map=new Map();

for(let i=0;i<str.length;i++){ 


    if(map.has(str[i])){

         let temp= map.get(str[i]);

         temp[1] = temp[1]+1;
         map.set(str[i],temp);


    }else{

         map.set(str[i],[i,1]);
    }
}

for(let x of map){

     if(x[1][1]===1){

         console.log(`first non-repeating character is ${x[0]} and index number is ${x[1][0]}`);
         flag =1;
         break;
     }
}

if(flag===0){

     console.log(`No non-repeating character is found `);
}
