

/* Find largest  and smallest number in a array

Examples:

Example 1:
Input:
nums = [12, 35, 1, 10, 34, 1]

Output:
[35, 1]

Explanation:
The largest element is 35 and the smallest element is 1.

Example 2:
Input:
nums = [5]

Output:
[5, 5]

Explanation:
Since the array contains only one element, it is both the largest and smallest.

Example 3:
Input:
nums = [-10, -20, -3, -50]

Output:
[-3, -50]

Explanation:
The largest element is -3 and the smallest element is -50.

Example 4:
Input:
nums = [7, 7, 7, 7]

Output:
[7, 7]

Explanation:
All elements are the same, so both the largest and smallest elements are 7.

Follow-up:
Can you solve it in a single traversal of the array with O(n) time complexity and O(1) extra space?

*/


const arr = [];

let sm =arr[0];

let lr = arr[0];


for(let i=0;i<arr.length;i++){

     if(arr[i]<sm){

         sm=arr[i];
     }else if(arr[i]>lr){

        lr=arr[i];
     }
}

console.log(`smallest value in array ${sm}`);

console.log(`largest value in array ${lr}`);
