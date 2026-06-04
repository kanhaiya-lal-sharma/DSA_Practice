
/*
=========================================
Question:
=========================================

Given an array of integers `arr` and an integer `K`,
find the length of the longest contiguous subarray
whose sum is exactly equal to K.

Example:
Input:
arr = [1, 2, 3, 1, 1, 1, 1]
K = 6

Output:
4

Explanation:
Subarrays with sum = 6:
[1, 2, 3]      -> Length = 3
[3, 1, 1, 1]   -> Length = 4

Maximum length = 4

=========================================
Approach (Brute Force):
=========================================

1. Start from every index `i`.
2. Maintain a running sum.
3. Extend the subarray using index `j`.
4. If running sum becomes equal to K:
      - Calculate current subarray length.
      - Update maximum length.
5. Return the maximum length found.

=========================================
Time Complexity:
=========================================

O(N²)

Reason:
For every starting index `i`, we traverse the remaining
elements using index `j`.

=========================================
Space Complexity:
=========================================

O(1)

No extra data structure is used.
*/


const arr=[1,2,3,1,1,1,1];

const k =6

let maxlen=0;
let sum=0;

for(let i=0;i<arr.length;i++){

     sum =0;

     for(let j=i;j<arr.length;j++){

         sum = sum + arr[j];
          
         if(sum===k){

             let templen = j-i+1;
             maxlen = (maxlen>=templen)?maxlen:templen;

         }
     }

     

}

 console.log(maxlen);


 
