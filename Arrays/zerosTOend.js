
//Move zeros to end

/*
   
   Examples:

Example 1:
Input:
nums = [0,1,0,3,12]

Output:
[1,3,12,0,0]

Explanation:
After moving all zeroes to the end, the relative order of non-zero elements remains unchanged.

Example 2:
Input:
nums = [0]

Output:
[0]

Example 3:
Input:
nums = [4,0,5,0,0,3,2]

Output:
[4,5,3,2,0,0,0]

Example 4:
Input:
nums = [1,2,3,4]

Output:
[1,2,3,4]

Explanation:
There are no zeroes in the array, so the array remains unchanged.

Follow-up:
Can you solve it in O(n) time complexity and O(1) extra space?

*/


const arr = [0,1,0,3,12];

let j=0;

for(let i=0;i<arr.length;i++){

    if(arr[i]!=0){

       arr[j] = arr[i];
       arr[i]=0;
       j++;

    }
}

console.log(arr);


/*

Approach: Two Pointer Technique

Idea:
We use two pointers:

1. i -> Traverses the entire array.
2. j -> Points to the position where the next non-zero element should be placed.

Algorithm:
1. Initialize j = 0.
2. Traverse the array using i.
3. If arr[i] is non-zero:
   - Place arr[i] at index j.
   - Set arr[i] to 0.
   - Increment j.
4. After the traversal, all non-zero elements will be shifted to the front while maintaining their relative order.
5. All zeroes automatically move towards the end.

Dry Run:

Input:
arr = [0, 1, 0, 3, 12]

Initial:
j = 0

i = 0
arr[0] = 0
Ignore

Array:
[0, 1, 0, 3, 12]

i = 1
arr[1] = 1 (non-zero)

arr[j] = arr[i]
arr[0] = 1

arr[i] = 0
arr[1] = 0

j++

Array:
[1, 0, 0, 3, 12]

j = 1

i = 2
arr[2] = 0
Ignore

Array:
[1, 0, 0, 3, 12]

i = 3
arr[3] = 3 (non-zero)

arr[1] = 3
arr[3] = 0

j++

Array:
[1, 3, 0, 0, 12]

j = 2

i = 4
arr[4] = 12 (non-zero)

arr[2] = 12
arr[4] = 0

j++

Array:
[1, 3, 12, 0, 0]

Output:
[1, 3, 12, 0, 0]

Time Complexity:
O(n)

Space Complexity:
O(1)

Why does it work?

- j always points to the next position where a non-zero element should be stored.
- i scans the entire array once.
- Every non-zero element is moved to its correct position.
- Relative order of non-zero elements remains unchanged.
- No extra array is used.

*/