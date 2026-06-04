
/* Find median of two sorted Array

    space complaxity = 0(1)

    time complaxity  =0((m+2)/2)

 */   
const arr1=[2,4,6,8];
const arr2=[1,3,5,7];

let i=0,j=0,k=0;

const len=arr1.length + arr2.length;

if(len % 2 ===0){

     const median = len/2;

     while(k<median-1){

         if(arr1[i]<=arr2[j]){

             i++;
             k++;

         }else if(arr1[i]>=arr2[j]){

             j++;
             k++;
         }
     }

    

 for(z=0;z<2;z++){
     if(arr1[i]<=arr2[j]){

         console.log(arr1[i]);
         i++;
     }else{

         console.log(arr2[j]);
         j++;
     }

    }
}else if(len % 2!==0){

     const median1 = parseInt(len/2);

      while(k<median1-1){

         if(arr1[i]<=arr2[j]){

             i++;
             k++;

         }else if(arr1[i]>=arr2[j]){

             j++;
             k++;
         }
     }

     
     if(arr1[i]<=arr2[j]){

         console.log(arr1[i]);
     }else{

         console.log(arr2[j]);
     }


}