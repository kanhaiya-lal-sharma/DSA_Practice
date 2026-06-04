
// Merge two sorted arrays

const arr1=[2,4,6,8];
const arr2=[1,2,3,5];

let i=0,j=0,k=0;

const res=[]

while(i<arr1.length && j<arr2.length){

     if(arr1[i]>=arr2[j]){

         res[k]=arr2[j];
         k++;
         j++; 
     }else if(arr1[i]<=arr2[j]){

         res[k]=arr1[i];
         k++;
         i++;

     }

}

if(i<arr1.length){
   
     while(i<arr1.length){

         res[k]=arr1[i];
         i++;
         k++;
     }
     
}
if(j<arr2.length){

     while(j<arr2.length){
         
         res[k]=arr2[j];
         j++;
         k++;
     }
}

console.log(res);