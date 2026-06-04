

// Remove duplicates from array


const arr = [1, 2, 2, 3, 4, 4, 5];

const set1 = new Set();

for(let i=0;i<arr.length;i++){

     set1.add(arr[i]);
}

console.log(set1);