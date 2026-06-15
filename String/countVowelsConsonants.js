
/*

Count Vowels and Consonants

Problem Statement:
Given a string `s` consisting of lowercase and uppercase English letters, count the number of vowels and consonants present in the string.

Vowels are: 'a', 'e', 'i', 'o', 'u' (both lowercase and uppercase).

Return the counts of vowels and consonants.

Note:
- Ignore spaces and special characters.
- Only alphabetic characters should be considered.

Example 1:
Input:
s = "kanhaiya"

Output:
Vowels: 4
Consonants: 4

Explanation:
Vowels = a, a, i, a
Consonants = k, n, h, y

Example 2:
Input:
s = "Hello World"

Output:
Vowels: 3
Consonants: 7

Explanation:
Vowels = e, o, o
Consonants = H, l, l, W, r, l, d

Constraints:
1 <= s.length <= 10^5
s may contain:
- Uppercase English letters (A-Z)
- Lowercase English letters (a-z)
- Spaces
- Special characters

Follow-up:
Can you solve it in O(n) time complexity and O(1) extra space?

*/

const str ="aeiou@#q11wr";

const set = new Set(["a","e","i","o","u"]);

let cons=0;

let vowels =0;

const res = str.toLowerCase();

console.log(res);

//console.log(str);

for(st of res){

     if(st>="a" && st<="z"){

         if(set.has(st)){

             vowels++;
         }else{

             cons++;
         }
     }
}

console.log(`number of vowels is ${vowels}`);

console.log(`number of consonants is ${cons}`);