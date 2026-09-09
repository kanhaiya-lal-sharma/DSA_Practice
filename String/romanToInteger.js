
/*
=========================================
Problem: Roman to Integer
Category: String
Difficulty: Easy
=========================================

Problem Statement:
Roman numerals are represented by seven different symbols:

I = 1
V = 5
X = 10
L = 50
C = 100
D = 500
M = 1000

For example:
- II = 2
- XII = 12
- XXVII = 27

Roman numerals are usually written from largest to smallest from left to right.
However, there are six special cases where subtraction is used:

I can be placed before V (5) and X (10) to make 4 and 9.
X can be placed before L (50) and C (100) to make 40 and 90.
C can be placed before D (500) and M (1000) to make 400 and 900.

Given a Roman numeral string, convert it into its integer equivalent.

Examples:

Input: "III"
Output: 3

Input: "LVIII"
Output: 58

Input: "MCMXCIV"
Output: 1994

Constraints:
- 1 <= s.length <= 15
- s contains only the characters:
  ('I', 'V', 'X', 'L', 'C', 'D', 'M')
- It is guaranteed that s is a valid Roman numeral.
*/


var romanToInt = function(s) {

 const map = new Map();

 map.set("I",1);
 map.set("V",5);
 map.set("X",10);
 map.set("L",50);
 map.set("C",100);
  map.set("D", 500); 
 map.set("M",1000);

 let ans=0;



for(i=0;i<s.length;i++){

    const curn = map.get(s[i]);
    const next = map.get(s[i+1])||0;

    
    if(curn < next){

        ans= ans-curn;   
    }else{

         ans = ans+curn;
    }

    
}

return ans;

};


console.log(romanToInt("DCXXI"));