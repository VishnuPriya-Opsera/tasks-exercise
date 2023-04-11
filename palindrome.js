function palindrome(num){
    let convert= num.toString();
let j= convert.length;
let count= 1;
let k= Math.floor(j/2)+1
for (i=0; i<k; i++)  {
    j--;
    if(convert[i]!= convert[j]) {
        count=0;  }
}
    if(count==0) {
    console.log("the given number is not palindrome")  } 
   else { 
     console.log("the given number is  palindrome") } 
   }
   let palin= palindrome(123321);