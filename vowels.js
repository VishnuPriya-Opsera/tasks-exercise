// JS: Write a JS function to find number of vowels in a given string.
function vowel(string) {
    let arr=string.split("");
    let sum=0;
for (let i=0;i<arr.length;i++) {
    if((arr[i]=='a')||(arr[i]=='e')||(arr[i]=='i')||(arr[i]=='o')||(arr[i]=='u')){
        sum= sum+1;
        console.log(arr[i]);
    }
}
return sum;
}
let total = console.log(vowel('people'));
