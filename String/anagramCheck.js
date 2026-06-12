/*

Problem: Valid Anagram

Given two strings s and t, determine whether t is an anagram of s.

An anagram is a word or phrase formed by rearranging the letters of another word, using all the original letters exactly once.

Input:
Two strings s and t.

Output:
Return true if t is an anagram of s, otherwise return false.

Example 1:
Input:
s = "anagram"
t = "nagaram"

Output:
true

Example 2:
Input:
s = "rat"
t = "car"

Output:
false

Constraints:
1 <= s.length, t.length <= 5 * 10^4
s and t consist of lowercase English letters.

Follow-up:
Can you solve it in O(n) time complexity without sorting the strings?

*/


// const str1="kkllss";

// const str2 = "slkkll";

const str1 = "aabb";
const str2 = "aaab";

const map = new Map();

let flag =0;

if(str1.length === str2.length){


for(st of str1){

     if(map.has(st)){

         let val = map.get(st);
         val=val+1;
         map.set(st,val);
     }else{

         map.set(st,1);
     }
}

for(st of str2){

     if(map.has(st)){

         let val = map.get(st);
         val=val-1;
         if(val===0){

             map.delete(st);
         }else{

             map.set(st,val);
         }
     }else{

         flag=1;
         
         break;
     }
}
}else{

    flag =1;
}

if(flag===1){

     console.log("not anagram");
}else{

     console.log("anagram");
}



