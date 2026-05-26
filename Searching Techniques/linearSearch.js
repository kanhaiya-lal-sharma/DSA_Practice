
//Linear search simple search hai,  one by one  har element ko compare karna hai  

const arr1=[23,54,12,65,100,2,4];
const no =2;
let flag =0;

for(let i=0;i<=arr1.length-1;i++){

     if(arr1[i]===no){
            
          console.log(`Element ${no} is found at ${i+1} `);
          flag =1;
          break;
     }
}

if(flag ===0){

    console.log("element is not found");
}