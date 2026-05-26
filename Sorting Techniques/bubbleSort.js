

/*

  Bubble Sort ka main idea bahut simple hai:

   =>Adjacent elements ko compare karo aur agar wrong order mein hain toh swap karo.

Har pass ke baad:

  =>sabse bada element end mein chala jata hai.

Isliye isko “Bubble Sort” bolte hain — bade elements bubble ki tarah upar/end ki taraf move karte hain.


BUBBLE SORT LOGIC

Initial Array
------------------------------------------------
[64, 25, 12, 22, 11]



PASS 1
------------------------------------------------

Compare 64 and 25
64 > 25 → Swap

[25, 64, 12, 22, 11]


Compare 64 and 12
64 > 12 → Swap

[25, 12, 64, 22, 11]


Compare 64 and 22
64 > 22 → Swap

[25, 12, 22, 64, 11]


Compare 64 and 11
64 > 11 → Swap

[25, 12, 22, 11, 64]

Result:
Largest element 64 moved to END ✅



PASS 2
------------------------------------------------

Compare 25 and 12
25 > 12 → Swap

[12, 25, 22, 11, 64]


Compare 25 and 22
25 > 22 → Swap

[12, 22, 25, 11, 64]


Compare 25 and 11
25 > 11 → Swap

[12, 22, 11, 25, 64]

Result:
Second largest element 25 fixed ✅



PASS 3
------------------------------------------------

Compare 12 and 22
12 > 22 → NO


Compare 22 and 11
22 > 11 → Swap

[12, 11, 22, 25, 64]

Result:
22 fixed at correct position ✅



PASS 4
------------------------------------------------

Compare 12 and 11
12 > 11 → Swap

[11, 12, 22, 25, 64]



FINAL SORTED ARRAY
------------------------------------------------
[11, 12, 22, 25, 64]



IMPORTANT LOGIC
------------------------------------------------
Outer Loop:
Controls number of passes

Inner Loop:
Compares adjacent elements

if(arr1[j] > arr1[j+1])
→ swap


WHY:
j < arr1.length-1-i

------------------------------------------------
After every pass,
largest element moves to END.

So sorted part ko dobara check
karne ki zarurat nahi.

-i ka matlab:
already sorted elements skip karo ✅



VISUALIZATION
------------------------------------------------

PASS 1 → 64 fixed at end
[25, 12, 22, 11, |64]

PASS 2 → 25 fixed
[12, 22, 11, |25, 64]

PASS 3 → 22 fixed
[12, 11, |22, 25, 64]

PASS 4 → Fully Sorted
[11, 12, 22, 25, 64]

*/

const arr1=[64, 25, 12, 22, 11];

for(let i=0;i<arr1.length-1;i++){

     for(let j=0;j<arr1.length-1-i;j++){

         if(arr1[j]>arr1[j+1]){

             let temp = arr1[j];
             arr1[j]=arr1[j+1];
             arr1[j+1]=temp;
         }
     }
}

console.log(arr1);