
/* yhh keval sorted array pr kaam karta hai 
   
   Ye hamesha middle element check karta hai => agar middle element sai chota hai to keval left side compare karega 
                                                agar bada hai to right side 
                                                agar middle wala element equal hai to search complete 

   BINARY SEARCH LOGIC

Array (Must Be Sorted)
------------------------------------------------
[23, 34, 45, 56, 67, 78, 89, 90]

Target Element = 23


INITIAL VALUES
------------------------------------------------
i = 0
j = 7

mid = i + parseInt((j-i)/2)

mid = 0 + parseInt((7-0)/2)
mid = 0 + 3
mid = 3

arr1[mid] = 56



STEP 1
------------------------------------------------
Check:

56 === 23 ?
NO

56 > 23 ?
YES

Means target LEFT side mein hoga.

So:
j = mid - 1

j = 3 - 1
j = 2


IMPORTANT MID LOGIC
------------------------------------------------
mid = i + parseInt((j-i)/2)

WHY IMPORTANT ?

Direct:
mid = parseInt(j/2)

Wrong ho sakta hai because
updated range ka starting index (i)
consider nahi hota.

Correct Formula:
mid = i + parseInt((j-i)/2)

Explanation:

(j-i)
→ current search space ka size

parseInt((j-i)/2)
→ us search space ka middle

i + ...
→ actual array index par shift karta hai


NOW:
------------------------------------------------
i = 0
j = 2

mid = 0 + parseInt((2-0)/2)
mid = 1

arr1[mid] = 34



STEP 2
------------------------------------------------
34 === 23 ?
NO

34 > 23 ?
YES

Target again LEFT side mein hoga.

So:
j = mid - 1

j = 1 - 1
j = 0



NOW:
------------------------------------------------
i = 0
j = 0

mid = 0 + parseInt((0-0)/2)
mid = 0

arr1[mid] = 23



STEP 3
------------------------------------------------
23 === 23 ?
YES ✅

Element Found



FINAL OUTPUT
------------------------------------------------
Element 23 is found at position 1



MAIN IDEA
------------------------------------------------
1. Find middle element
2. Compare with target
3. If target smaller:
      search LEFT half
4. If target greater:
      search RIGHT half
5. Repeat until element found                                             

*/

const arr1=[23,34,45,56,67,78,89,90];
const no =23;

let i=0;
let j = arr1.length-1;
let mid = parseInt(j/2);
let flag =0;

while(i<=j){

     if(arr1[mid]===no){

         console.log(`Element ${no} is found at ${mid+1} `);
         flag =1;
         break;
     }else if(arr1[mid]>no){

           j=mid-1;

           mid = parseInt((j-i)/2);       //yhh ek line samajna important hai , baki easy hai

     }else if(arr1[mid]<no){

          i=mid+1;

           mid = i + parseInt((j-i)/2);
     }
 }


if(flag ===0){

     console.log("Element is not found");
}
