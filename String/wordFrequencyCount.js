/*
==================================================
5. Word Frequency Count
Difficulty: Easy
==================================================

Problem:
Given a string sentence containing words separated by
spaces, count the frequency of each word and return
the result.

Words are case-insensitive.

Examples:

Example 1:

Input:
sentence = "apple banana apple orange banana apple"

Output:
{
  apple: 3,
  banana: 2,
  orange: 1
}

Example 2:

Input:
sentence = "hello world hello"

Output:
{
  hello: 2,
  world: 1
}

Example 3:

Input:
sentence = "cat dog cat cat dog"

Output:
{
  cat: 3,
  dog: 2
}



Expected Output:
Return an object or Map containing each word and
its frequency.

==================================================
*/


const sentence = "apple banana apple orange banana apple";

const map = new Map();

const arr= sentence.split(" ");

for(let word of arr){

    if(map.has(word)){

         let temp = map.get(word);
         temp = temp+1;
         map.set(word,temp);
    }else{

         map.set(word,1);
    }
}

console.log(map);