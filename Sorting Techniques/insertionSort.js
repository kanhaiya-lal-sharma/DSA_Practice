
/*
    INSERTION SORT LOGIC

Initial Array
------------------------------------------------
[5, 3, 4, 1, 2]



IMPORTANT IDEA
------------------------------------------------
Left side = Sorted Part
Right side = Unsorted Part

Har pass mein:
1. Ek element pick hota hai
2. Left side ke sorted elements se compare hota hai
3. Bade elements right side move hote hain
4. Element correct position par insert hota hai



PASS 1
------------------------------------------------

Sorted Part:
[5]

Pick Element:
3


Compare:
3 < 5 → YES

Swap

[3, 5, 4, 1, 2]


Result:
[3, 5] | [4, 1, 2]



PASS 2
------------------------------------------------

Pick Element:
4

Current Array:
[3, 5, 4, 1, 2]


Compare:
4 < 5 → YES

Swap

[3, 4, 5, 1, 2]


Compare:
4 < 3 → NO

STOP


Result:
[3, 4, 5] | [1, 2]



PASS 3
------------------------------------------------

Pick Element:
1

Current Array:
[3, 4, 5, 1, 2]


Compare:
1 < 5 → YES

[3, 4, 1, 5, 2]


Compare:
1 < 4 → YES

[3, 1, 4, 5, 2]


Compare:
1 < 3 → YES

[1, 3, 4, 5, 2]


Result:
[1, 3, 4, 5] | [2]



PASS 4
------------------------------------------------

Pick Element:
2

Current Array:
[1, 3, 4, 5, 2]


Compare:
2 < 5 → YES

[1, 3, 4, 2, 5]


Compare:
2 < 4 → YES

[1, 3, 2, 4, 5]


Compare:
2 < 3 → YES

[1, 2, 3, 4, 5]


Compare:
2 < 1 → NO

STOP



FINAL SORTED ARRAY
------------------------------------------------
[1, 2, 3, 4, 5]



IMPORTANT LOOP LOGIC
------------------------------------------------

Outer Loop:
for(i)

→ Ek element pick karta hai


Inner Loop:
for(j)

→ Picked element ko left side
   mein correct position tak le jata hai


Condition:
if(arr1[j] < arr1[j-1])

→ Agar current element chhota hai
   toh swap karo



VISUALIZATION
------------------------------------------------

PASS 1
[3, 5 | 4, 1, 2]

PASS 2
[3, 4, 5 | 1, 2]

PASS 3
[1, 3, 4, 5 | 2]

PASS 4
[1, 2, 3, 4, 5]

*/

const arr1=[5, 3, 4, 1, 2];

for(let i=0;i<arr1.length-1;i++){

     for(let j=i+1;j>0;j--){

         if(arr1[j]<arr1[j-1]){

             let temp = arr1[j];
             arr1[j]=arr1[j-1];
             arr1[j-1]=temp;
         }
     }
}

console.log(arr1);