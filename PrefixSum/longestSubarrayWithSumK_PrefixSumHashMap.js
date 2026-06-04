

/*
=========================================
Question:
=========================================

Given an array of integers `arr` and an integer `K`,
find the length of the longest contiguous subarray
whose sum is exactly equal to K.

The array may contain positive, negative, and zero values.

Example:

Input:
arr = [9, 4, 20, 3, 10, 5]
K = 33

Output:
3

Explanation:
Subarray [9, 4, 20] has sum = 33
Length = 3

=========================================
Approach (Optimal - Prefix Sum + HashMap):
=========================================

1. Maintain a running prefix sum.
2. Store the first occurrence of every prefix sum
   in a HashMap.
3. For each index:
   - Add current element to prefix sum.
   - If prefix sum equals K, update max length.
   - Check whether (prefixSum - K) exists in map.
     If it exists, a subarray with sum K is found.
   - Calculate its length and update maximum length.
4. Store prefix sum in map only if it is appearing
   for the first time.

Why store the first occurrence?
Because for the longest subarray we want the
earliest index of a prefix sum so that the
calculated length becomes maximum.

=========================================
Time Complexity:
=========================================

O(N)

Each element is processed once and HashMap
operations take O(1) on average.

=========================================
Space Complexity:
=========================================

O(N)

HashMap may store up to N prefix sums.
=========================================
*/

 const arro = [9,4,0,0,0,-3,20,3,20,5];
const ko = 33;

let sumo = 0;
let maxleno = 0;

const map = new Map();

for(let k = 0; k < arro.length; k++) {

    sumo += arro[k];

    if(sumo === ko) {
        maxleno = k + 1;
    }

    if(map.has(sumo - ko)) {
        let i = map.get(sumo - ko);
        let templen = k - i;
        maxleno = Math.max(maxleno, templen);
    }

    if(!map.has(sumo)) {
        map.set(sumo, k);
    }
}

console.log(maxleno);
