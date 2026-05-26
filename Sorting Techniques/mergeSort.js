
/*
              [38,27,43,3,9,82,10]

                 /        \
        [38,27,43,3]    [9,82,10]

          /     \         /    \
      [38,27] [43,3]   [9,82] [10]

       /  \      / \      / \
     [38][27] [43][3] [9][82]

------------------------------------------------

Now Merge Back

[38] [27] → [27,38]
[43] [3]  → [3,43]

[27,38] + [3,43]
→ [3,27,38,43]

[9] [82] → [9,82]

[9,82] + [10]
→ [9,10,82]

FINAL:
[3,27,38,43] + [9,10,82]

→ [3,9,10,27,38,43,82]   

*/


const arr = [38, 27, 43, 3, 9, 82, 10];

function mergeSort(arr){

    // Base Condition
    if(arr.length <= 1){
        return arr;
    }

    // Find Middle
    let mid = parseInt(arr.length / 2);

    // Divide Array
    let left = arr.slice(0, mid);
    let right = arr.slice(mid);

    // Recursive Divide
    left = mergeSort(left);
    right = mergeSort(right);

    // Merge Sorted Arrays
    return merge(left, right);
}


function merge(left, right){

    let result = [];

    let i = 0;
    let j = 0;

    // Compare Elements
    while(i < left.length && j < right.length){

        if(left[i] < right[j]){

            result.push(left[i]);
            i++;

        }else{

            result.push(right[j]);
            j++;
        }
    }

    // Remaining Left Elements
    while(i < left.length){

        result.push(left[i]);
        i++;
    }

    // Remaining Right Elements
    while(j < right.length){

        result.push(right[j]);
        j++;
    }

    return result;
}


console.log(mergeSort(arr));
