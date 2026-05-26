
/*

  QUICK SORT LOGIC

Initial Array
------------------------------------------------
[38, 27, 43, 3, 9, 82, 10]



MAIN IDEA
------------------------------------------------
1. Choose a PIVOT element
2. Smaller elements → LEFT side
3. Greater elements → RIGHT side
4. Repeat same process recursively



STEP 1 → CHOOSE PIVOT
------------------------------------------------

Pivot = 10
(last element liya)


Array:
[38, 27, 43, 3, 9, 82, 10]


Smaller than 10:
[3, 9]

Greater than 10:
[38, 27, 43, 82]


Now:
------------------------------------------------
[3, 9] + [10] + [38, 27, 43, 82]



STEP 2 → LEFT SIDE SORT
------------------------------------------------

Array:
[3, 9]

Pivot = 9


Smaller:
[3]

Greater:
[]


Result:
------------------------------------------------
[3] + [9] + []

→ [3, 9]



STEP 3 → RIGHT SIDE SORT
------------------------------------------------

Array:
[38, 27, 43, 82]

Pivot = 82


Smaller:
[38, 27, 43]

Greater:
[]


Result:
------------------------------------------------
[38, 27, 43] + [82]



STEP 4
------------------------------------------------

Array:
[38, 27, 43]

Pivot = 43


Smaller:
[38, 27]

Greater:
[]


Result:
------------------------------------------------
[38, 27] + [43]



STEP 5
------------------------------------------------

Array:
[38, 27]

Pivot = 27


Smaller:
[]

Greater:
[38]


Result:
------------------------------------------------
[] + [27] + [38]

→ [27, 38]



NOW MERGE BACK
------------------------------------------------

[27, 38] + [43]
→ [27, 38, 43]



[27, 38, 43] + [82]
→ [27, 38, 43, 82]



FINAL MERGE
------------------------------------------------

LEFT:
[3, 9]

PIVOT:
[10]

RIGHT:
[27, 38, 43, 82]


FINAL SORTED ARRAY
------------------------------------------------
[3, 9, 10, 27, 38, 43, 82]



VISUAL TREE
------------------------------------------------

               [38,27,43,3,9,82,10]
                         pivot=10

                 /                    \
              [3,9]             [38,27,43,82]


            pivot=9               pivot=82

           /      \               /        \
         [3]      []      [38,27,43]      []


                            pivot=43

                           /       \
                      [38,27]      []


                         pivot=27

                        /       \
                      []       [38]



IMPORTANT CONCEPT
------------------------------------------------
Quick Sort mein:
- splitting pivot ke according hoti hai
- merge function alag nahi hota
- partitioning hi actual sorting karta hai



TIME COMPLEXITY
------------------------------------------------
Best Case:
O(n log n)

Worst Case:
O(n²)



MEMORY TRICK
------------------------------------------------
Choose Pivot
→ Partition
→ Recursively Sort Left & Right

*/