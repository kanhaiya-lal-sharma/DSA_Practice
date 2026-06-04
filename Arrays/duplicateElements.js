
// Given an integer array arr of size N, find all elements that appear more than once in the array. Return the duplicate elements in ascending order.

const arr = [1, 2, 3, 1,1, 3, 6, 6];

const res=[];

const map1= new Map();

for(i=0;i<arr.length;i++){

     if(map1.has(arr[i])){

         let freq=map1.get(arr[i]);
         freq =freq+1;
         res.push(arr[i]);

         if(freq ===2){
            
            map1.set(arr[i],freq);

         }
     }else{

         map1.set(arr[i],1);
     }

}

console.log(res);