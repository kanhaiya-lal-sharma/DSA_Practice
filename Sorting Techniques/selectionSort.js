
/* Har round mein smallest element dhoondo aur usko correct position par rakh do.


SELECTION SORT LOGIC

Initial Array
------------------------------------------------
[64, 25, 12, 22, 11]


PASS 1
------------------------------------------------
Find smallest element from entire array

[64, 25, 12, 22, 11]
 ↑
 assume smallest

25 < 64  → smallest = 25
12 < 25  → smallest = 12
22 < 12  → NO
11 < 12  → smallest = 11

Swap 64 ↔ 11

Result:
[11, 25, 12, 22, 64]

Sorted Part    | Unsorted Part
[11]           | [25, 12, 22, 64]



PASS 2
------------------------------------------------
Start from index 1

[11, 25, 12, 22, 64]
      ↑
 assume smallest

12 < 25 → smallest = 12
22 < 12 → NO
64 < 12 → NO

Swap 25 ↔ 12

Result:
[11, 12, 25, 22, 64]

Sorted Part       | Unsorted Part
[11, 12]          | [25, 22, 64]



PASS 3
------------------------------------------------
Start from index 2

[11, 12, 25, 22, 64]
          ↑
 assume smallest

22 < 25 → smallest = 22
64 < 22 → NO

Swap 25 ↔ 22

Result:
[11, 12, 22, 25, 64]

Sorted Part           | Unsorted Part
[11, 12, 22]          | [25, 64]



PASS 4
------------------------------------------------
Start from index 3

[11, 12, 22, 25, 64]
              ↑
 assume smallest

64 < 25 → NO

No swap needed

Final Sorted Array
------------------------------------------------
[11, 12, 22, 25, 64]



MAIN IDEA
------------------------------------------------
1. Assume current element is smallest
2. Find actual smallest from remaining array
3. Swap with current position
4. Repeat until array gets sorted

*/

let arr1 =[64, 25, 12, 22, 11];

let small=0;



 for(let i=0;i<arr1.length-1;i++){

     small =i;

    for(let j=i+1;j<=arr1.length-1;j++){

         if(arr1[j] < arr1[small]){

              small = j;
         }
    }

    let temp = arr1[i];
    arr1[i]=arr1[small];
    arr1[small]=temp;


 }

 console.log(arr1);