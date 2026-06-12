
 
const str="abccba";

let i=0,j=str.length-1;

let flag =0;

while(i<j){

       if(str[i]===str[j]){

         i++;
         j--;
     
     }else{

         flag =1;
      
         break;
     }
}

if(flag===0){

      console.log("String is Palindrome");
}else{

      console.log("string is not palindrome");
}



//Palindrome ka question hai isme ham two pointer approch use karenge 