
/*
  
  Title: Find the Missing Number

Difficulty: Easy

Problem Statement:

You are given an array `nums` containing `n` distinct integers taken from the range `[0, n]`.

Since the array contains only `n` numbers from a range of `n + 1` numbers, exactly one number in the range is missing.

Your task is to find and return the missing number.

Function Signature:

int findMissingNumber(vector<int>& nums);

Input:
- An integer array `nums` of size `n`
- All elements are unique
- Elements belong to the range `[0, n]`

Output:
- Return the missing integer

Constraints:
- 1 <= n <= 10^5
- 0 <= nums[i] <= n
- All numbers in `nums` are unique

Example 1:
Input:
nums = [3, 0, 1]

Output:
2

Explanation:
The numbers in the range are [0, 1, 2, 3]. Number 2 is missing.

Example 2:
Input:
nums = [0, 1]

Output:
2

Explanation:
The numbers in the range are [0, 1, 2]. Number 2 is missing.

Example 3:
Input:
nums = [9,6,4,2,3,5,7,0,1]

Output:
8

Explanation:
The numbers in the range are [0,1,2,3,4,5,6,7,8,9]. Number 8 is missing.

Follow-up:
Can you solve it in O(n) time complexity and O(1) extra space?

*/



const arr = [9,6,4,2,3,5,7,0,1,8];

const len = arr.length;

const sum = (len*(len+1))/2;

let total=0;

for(let i=0;i<len;i++){

    total=total+arr[i];

}

console.log(`missing number is ${sum-total}`);