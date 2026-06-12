
//String compression (aaabb -> a3b2)

/*
==================================================
2. String Compression
Difficulty: Easy
==================================================

Problem:
Given a string s, compress it by replacing consecutive
repeating characters with the character followed by
its frequency count.

Return the compressed string.

Examples:

Input: s = "aaabb"
Output: "a3b2"

Input: s = "aabcccccaaa"
Output: "a2b1c5a3"

Input: s = "abcd"
Output: "a1b1c1d1"

Input: s = "zzzz"
Output: "z4"



Notes:
- Count only consecutive occurrences of a character.
- Characters appearing once should also include their count.

Example:
"aaabbcaa"

=> "a3b2c1a2"

==================================================
*/

const str ="aaabbaac";

let res="";

let i=0,j=0;

let count =0;



res= res+str[j];

while(j<str.length){

if(str[i]===str[j]){

    count++;
    j++;

}else if(str[i]!==str[j]){

    

    res =res+count;
     i=j;
    count=0;
    res= res+str[j];
}
}

res = res + count;


console.log(res);