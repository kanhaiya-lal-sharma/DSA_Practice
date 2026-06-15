
/*
==================================================
Reverse a String
Difficulty: Easy
==================================================

Problem:
Given a string s, return the string with its characters
in reverse order.

Examples:

Example 1:

Input:
s = "hello"

Output:
"olleh"

Example 2:

Input:
s = "JavaScript"

Output:
"tpircSavaJ"

Example 3:

Input:
s = "a"

Output:
"a"

Example 4:

Input:
s = "abcd"

Output:
"dcba"



Expected Output:
Return a new string containing the characters of s
in reverse order.

==================================================
*/

const str ="kanhaiya";

let rev ="";

for(let i=str.length-1;i>=0;i--){

     rev=rev+str[i];
}

console.log(rev);

//Agar build-in method sai reverse karna hai to kuch aise kar sakte hai 

const str = "kanhaiya";
const rev = str.split("").reverse().join("");

console.log(rev);