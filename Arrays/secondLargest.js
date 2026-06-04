
// Find second largest element in a array 

/*

  Examples:

Example 1:
Input:
nums = [12, 35, 1, 10, 34, 1]

Output:
34

Explanation:
The largest distinct element is 35, and the second largest distinct element is 34.

Example 2:
Input:
nums = [10, 5, 10]

Output:
5

Explanation:
The distinct elements are [10, 5]. The second largest element is 5.

Example 3:
Input:
nums = [7, 7, 7, 7]

Output:
-1

Explanation:
There is no second largest distinct element in the array.

Example 4:
Input:
nums = [5]

Output:
-1

Explanation:
Only one element exists in the array, so a second largest distinct element does not exist.

Follow-up:
Can you solve it in O(n) time and O(1) extra space?

*/


const arr = [12, 35, 1, 10, 34, 1];

let lar= -Infinity;
let slar=-Infinity;   //-Infinity isley leya hai agar array mai negative element hue like -> [-5, -2, -10] is case mai -1 lena fail ho jayega

for(i=0;i<arr.length;i++){

      if(arr[i]>lar){

         slar = lar;
         lar=arr[i];
      }else if(arr[i]>slar && arr[i]<lar){

         slar = arr[i];
      }
}

if (slar === -Infinity) {
    console.log(-1);
} else {
    console.log(slar);
}